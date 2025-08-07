Dockerfile
```
FROM nginx:stable-alpine as production-stage

# COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY ./nginx/conf.d/default.conf /etc/nginx/conf.d

EXPOSE 3001

CMD ["nginx", "-g", "daemon off;"]
```

nginx\conf.d\default.conf
```
server {
  listen 3001;

  location /spectrum-core/ {
    proxy_pass http://10.115.154.21:8185;
    proxy_set_header Origin "http://localhost:3000";
  }
}
```
