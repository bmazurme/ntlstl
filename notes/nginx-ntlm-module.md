# nginx-ntlm-module

### Проверить установленную версию nginx

```bash
  $ nginx -v
  № nginx version: nginx/1.26.3
```

### Скачать и распаковать

```bash
  $ wget https://nginx.org/download/nginx-1.26.3.tar.gz
  $ tar -zxf nginx-*.tar.gz
  $ cd nginx-*/
```

### Скачать nginx-ntlm-module
  
```bash
  $ git clone https://github.com/gabihodoroaga/nginx-ntlm-module.git
```

> Может понадобиться OpenSSL

```bash
  # RedOS
  $ sudo yum install openssl-devel

  $ openssl version
```

### Собрать модуль nginx-ntlm-module

```bash
  $ sudo ./configure --with-compat --add-dynamic-module=nginx-ntlm-module
  $ sudo make
  $ sudo make modules
```

### Скопировать модуль nginx-ntlm-module

```bash
  $ sudo cp objs/ngx_http_upstream_ntlm_module.so /usr/lib64/nginx/modules/
```

### Подключить модуль

```bash
  $ sudo nano /etc/nginx/modules/nginx-ntlm-module.conf
  # $ sudo nano /usr/share/nginx/modules/nginx-ntlm-module.conf
```

```bash
  load_module /usr/lib64/nginx/modules/ngx_http_upstream_ntlm_module.so;
```

### Добавить в конфиг

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

### Перезапустить
  
```bash
  $ sudo nginx -t
  $ sudo systemctl restart nginx
```

#### https://github.com/gabihodoroaga/nginx-ntlm-module
