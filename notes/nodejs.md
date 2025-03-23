# RedOS
## Установить NVM + Node.js
 
1. подключиться
```shell
  $ ssh user@192.168.50.51
  # $ sudo su gitlab-runner
```
 
2. установить
```shell
  $ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/master/install.sh | bash
```
 
3. прервать соединение
```shell
  Ctrl + D
```
 
4. подключиться
```shell
  $ ssh user@192.168.50.51
```
 
5. проверить NVM
```shell
  $ nvm
```
 
6. установить Node.js
```shell
  $ nvm install 22 # для версии 22, указать требуемую
```
 
7. использовать версию Node.js
```shell
  $ nvm use 22
```
 
8. проверить Node.js
```shell
  $ node -v
```
