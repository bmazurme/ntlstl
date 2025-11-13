services:
  cypress:
    # Конфигурация сборки образа из Dockerfile
    build:
      context: ../../
      dockerfile: .ci/e2e-rollout/Dockerfile.cy
      args:
        PROXY: $PROXY

    # Уникальное имя контейнера, которое будет использоваться в системе
    container_name: cypress # Имя контейнера

    # Образ Docker, который будет использоваться
    image: cypress:latest   # Используемый образ Cypress

    # Переменные окружения для приложения
    environment:
      - CYPRESS_BASE_URL=${CY_HOST} # http://host.docker.internal:3050 # Базовый URL для тестов
      - CYPRESS_USER=${CYPRESS_USER}                      # Пользователь для авторизации
      - CYPRESS_PASSWORD=${CYPRESS_PASSWORD}              # Пароль для авторизации
      # - NODE_ENV=test

    # user: '1007:1007'
    # volumes:
    #   - ../../cypress:/e2e/cypress # Монтирование директории с тестами
    volumes:
      - cypress-data:/e2e/cypress

    # Настройка сети для контейнера
    networks:
      - internet

    # Зависимости контейнера
    depends_on:
      - frontend-e2e
      - backend-adapter
      - backend-core
    
    healthcheck:
      # Проверка доступности сервиса с обработкой ошибки 502
      test: ["CMD-SHELL", 
         "curl -f -o /dev/null -s -w '%{http_code}' http://frontend-e2e:3050/spectrum-core/unsecured | \
         grep -qE '200' || exit 1"]
      interval: 30s # Интервал проверки
      timeout: 10s  # Таймаут запроса
      retries: 5    # Количество попыток проверки
      start_period: 30s
    command: ["npx", "cypress", "sleep 30 && npx cypress run"] # Команда для запуска тестов


  backend-adapter:
    image: nxs-test.spimex.dom:8083/spectrum/spectrum-adapter:${IMAGE_TAG}
    # image: nxs-test.spimex.dom:8083/spectrum/spectrum-adapter:0.1.0
    #! заменить после тестирования

    environment:
      - SPRING_PROFILES_ACTIVE=dev
      - CRM_CERT_ALIAS
      - SPECTRUM_ADAPTER_CONNECTIVITY_CRM_SYSTEM_NAME
      - SPECTRUM_ADAPTER_CONNECTIVITY_SPECTRUM_CORE_URL
      - SPECTRUM_ADAPTER_CONNECTIVITY_SPECTRUM_CORE_LOGIN
      - SPECTRUM_ADAPTER_CONNECTIVITY_SPECTRUM_CORE_PASSWORD

    volumes:
      # - ${ADAPTER_CERT_DIR}:/usr/cert  # ! добавить после выпуска
      - /ci/e2e-rollout/spectrum-adapter:/usr/adapter/config
      - /logs:/usr/adapter/logs

    # Настройка сети для контейнера
    networks:
      - internet

    # Проброс портов (хост:контейнер)
    ports:
      - 8184:8183
    
    # Политика перезапуска контейнера
    restart: unless-stopped

 
  backend-core:
    image: nxs-test.spimex.dom:8083/spectrum/spectrum-core:${IMAGE_TAG}
    # image: nxs-test.spimex.dom:8083/spectrum/spectrum-core:0.1.0
    #! заменить после тестирования

    environment:
      - SPRING_PROFILES_ACTIVE=dev
      - SPRING_DATASOURCE_PASSWORD=${CORE_DATASOURCE_PASSWORD}
      - SPIMEXID_SECRET
      - SPIMEXID_CERT_ALIAS
      - NGINX_PORT_EXT=3050

    volumes:
      # - ${CORE_CERT_DIR}:/usr/cert # ! добавить после выпуска
      - /ci/e2e-rollout/spectrum-core:/usr/core/config
      - /logs:/usr/core/logs

    # Настройка сети для контейнера
    networks:
      - internet

    # Проброс портов (хост:контейнер)
    ports:
      - 8185:8189
    
    # Политика перезапуска контейнера
    restart: unless-stopped

    # Зависимости контейнера
    depends_on:
      - backend-adapter
    healthcheck:
      test: ["CMD-SHELL", "curl -f http://backend-core:8189/spectrum-core/unsecured || exit 1"]
      interval: 10s
      timeout: 5s
      retries: 10
 

  frontend-e2e:
    # Уникальное имя контейнера, которое будет использоваться в системе
    container_name: frontend-e2e

    # Конфигурация сборки образа из Dockerfile
    build:
      context: ../../
      dockerfile: .ci/e2e-rollout/Dockerfile # Сборка из корневой директории
      args:
        PROXY: $PROXY

    # Образ Docker, который будет использоваться
    image: ${CR_HOST}/${CR_REGISTRY}/${CR_IMAGE}:e2e

    # Настройка сети для контейнера
    networks:
      - internet

    # Проброс портов (хост:контейнер)
    ports:
      - 3050:3050

    # Политика перезапуска контейнера
    restart: unless-stopped
    
    # Зависимости контейнера
    depends_on:
      - backend-core


networks:
  internet:
    driver: bridge # Тип сети
    name: public-net
    # attachable: true # Возможность подключения других сервисов

volumes:
  cypress-data:
    driver: local
    driver_opts:
      type: none
      device: ../../cypress
      o: bind
