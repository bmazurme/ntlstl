# Установка SSL-сертификата на Nginx

### Подготовка к установке
Перед установкой SSL-сертификата убедитесь, что:

Сертификат активирован

У вас есть все необходимые файлы (сертификат, приватный ключ, промежуточные сертификаты)

### Пошаговая инструкция установки
- Создание директории и файлов сертификатов

Если директория /etc/ssl/ отсутствует, создайте её:
```
  sudo mkdir /etc/ssl/
```

Создайте файл с сертификатами:
```
  sudo nano /etc/ssl/domain.crt
```

Вставьте в него содержимое в следующем порядке:
```
  -----BEGIN CERTIFICATE-----
  #Ваш сертификат
  -----END CERTIFICATE-----
  -----BEGIN CERTIFICATE-----
  #Промежуточный сертификат
  -----END CERTIFICATE-----
  -----BEGIN CERTIFICATE-----
  #Корневой сертификат
  -----END CERTIFICATE-----
```
- Создание файла приватного ключа

Создайте файл ключа:
```
  sudo nano /etc/ssl/domain.key
```

Вставьте содержимое приватного ключа.

Настройка Nginx

Откройте конфигурационный файл:
```
  sudo nano /etc/nginx/nginx.conf
```
Добавьте блок server:
```
  server {
    listen 443 ssl;
    server_name domain.com;
    ssl_certificate /etc/ssl/domain.crt;
    ssl_certificate_key /etc/ssl/domain.key;
  }
```
Применение изменений

Перезагрузите Nginx:
```
  sudo nginx -s reload
```
или
```
  systemctl reload nginx
```

### Дополнительные настройки безопасности
- Оптимизация производительности

Добавьте в конфигурацию:
```
  ssl_session_cache shared:SSL:10m;
  ssl_session_timeout 10m;
  keepalive_timeout 70;
```
- Настройка протоколов

Укажите поддерживаемые протоколы:
```
  ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
```
- Приоритет серверных шифров

Добавьте строку:
```
  ssl_prefer_server_ciphers on;
```
- Настройка OCSP

Создайте файл корневого сертификата:
```
  sudo nano /etc/ssl/ca.crt
```
Добавьте содержимое корневого сертификата.
В конфигурацию добавьте:
```
  ssl_stapling on;
  ssl_trusted_certificate /etc/ssl/ca.crt;
  resolver 8.8.8.8;
```
Проверка установки
После всех настроек проверьте корректность конфигурации:
```
  nginx -t
```
Перезагрузите Nginx для применения изменений:
```
  sudo systemctl restart nginx
```
Теперь ваш сайт защищен SSL-сертификатом и доступен по протоколу HTTPS.
