# Установка и настройка NGINX NTLM-модуля
NGINX NTLM-модуль — это дополнительный модуль для веб-сервера Nginx, который позволяет реализовать аутентификацию по протоколу NTLM. Это особенно полезно при работе с корпоративными сетями и Active Directory.

### Проверка версии Nginx
#### Перед установкой модуля необходимо проверить текущую версию Nginx:
```bash
  $ nginx -v
  # nginx version: nginx/1.26.3
```

### Подготовка к установке
#### Скачивание исходных файлов
- Скачайте архив с исходниками Nginx:
```bash
  $ wget https://nginx.org/download/nginx-1.26.3.tar.gz
  $ tar -zxf nginx-*.tar.gz
  $ cd nginx-*/
```

- Клонируйте репозиторий модуля:
```bash
  $ git clone https://github.com/gabihodoroaga/nginx-ntlm-module.git
```
> Может понадобиться OpenSSL

### Установка зависимостей
#### Для сборки модуля может потребоваться библиотека OpenSSL:
```bash
  # RedOS
  $ sudo yum install openssl-devel

  $ openssl version
```

### Сборка и установка модуля
- Соберите модуль:
```bash
  $ sudo ./configure --with-compat --add-dynamic-module=nginx-ntlm-module
  $ sudo make
  $ sudo make modules
```

- Скопируйте собранный модуль:
```bash
  $ sudo cp objs/ngx_http_upstream_ntlm_module.so /usr/lib64/nginx/modules/
```

### Настройка конфигурации
- Создайте конфигурационный файл модуля:
```bash
  $ sudo nano /etc/nginx/modules/nginx-ntlm-module.conf
  # или
  $ sudo nano /usr/share/nginx/modules/nginx-ntlm-module.conf
```
Добавьте строку:
```bash
  load_module /usr/lib64/nginx/modules/ngx_http_upstream_ntlm_module.so;
```

- Обновите основной конфигурационный файл Nginx:
```
upstream http_backend {
  server 127.0.0.1:8080;

  ntlm;
}

server {
  ...

  location /http/ {
    proxy_pass http://http_backend;
    # next 2 settings are required for the keepalive to work properly
    proxy_http_version 1.1;
    proxy_set_header Connection "";
  }
}
```

### Завершающие шаги
- Проверьте конфигурацию:
```bash
  $ sudo nginx -t
```

- Перезапустите NGINX:
```bash
  $ sudo systemctl restart nginx
```

### Возможные проблемы
- Убедитесь, что путь к модулю указан корректно
- Проверьте права доступа к файлам конфигурации
- При возникновении ошибок проверьте логи NGINX

#### https://github.com/gabihodoroaga/nginx-ntlm-module
