# nginx

### Установка nginx

```bash
  $ dnf install nginx
```

### Добавление сервиса в автозагрузку

```bash
  $ systemctl enable nginx --now
```
### Настройка конфигурационного файла nginx

```bash
  # Скопировать оригинальный конфигурационный файл
  $ mv /etc/nginx/nginx.conf /etc/nginx/nginx.conf_old
  
  # Открыть новый конфигурационный файл для редактирования
  $ nano /etc/nginx/nginx.conf
```

### Проверить синтаксис конфигурации

```bash
  $ nginx -t
```

### Если синтаксических ошибок нет, перезагрузить nginx

```bash
  $ nginx -s reload
```

### Остановить nginx

```bash
  $ sudo systemctl stop nginx
```

### Перезапустить nginx

```bash
  $ sudo systemctl restart nginx
```

### Проверить статуса nginx

```bash
  $ sudo systemctl status nginx
```

# Удалить nginx

### Остановить nginx

```bash
  $ sudo systemctl stop nginx
```

### Удалить nginx

```bash
  $ sudo dnf remove nginx
```

### Удалить конфигурационные файлы

```bash
  $ sudo dnf purge nginx
```

### Удалить оставшиеся зависимости

```bash
  $ sudo dnf autoremove
```

### Ручная проверка и удаление оставшихся файлов

```bash
  # Проверить директории /etc/nginx/ и /var/log/nginx/.
  $ sudo rm -rf /etc/nginx/
  $ sudo rm -rf /var/log/nginx/
```

# Очистить кэш и временные файлы

```bash
  $ sudo dnf clean all
```
