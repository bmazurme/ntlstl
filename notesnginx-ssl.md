# Установка PFX сертификата в Nginx
## Подготовка файлов
```bash
  # Извлечение публичного сертификата
  $ openssl pkcs12 -in file.pfx -clcerts -nokeys -out public.crt

  # Извлечение приватного ключа
  $ openssl pkcs12 -in file.pfx -nocerts -nodes -out private.rsa
```

## Настройка прав доступа
```bash
  # Перемещение файлов в директорию /etc/nginx/ssl
  $ sudo mv public.crt private.rsa /etc/nginx/ssl/

  # Установка прав доступа
  $ sudo chmod 400 /etc/nginx/ssl/*

  # Смена владельца файлов
  $ sudo chown www-data:www-data /etc/nginx/ssl/*
```

## Конфигурация Nginx

```bash
server {
    server_name example.org;
    listen 443 ssl;

    ssl_certificate /etc/nginx/ssl/public.crt;
    ssl_certificate_key /etc/nginx/ssl/private.rsa;

    location / {
        # Ваши настройки location
    }
}
```

Проверка и применение
```bash
  # Проверка конфигурации на ошибки
  $ sudo nginx -t

  # Перезапуск Nginx
  $ sudo systemctl restart nginx
```
