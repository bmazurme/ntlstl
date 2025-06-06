```js
  @Get()
  @ApiOperation({
   summary: 'Получить список пользователей',
   description: 'Этот метод возвращает список всех зарегистрированных пользователей',
  })
  findAll(): User {
   return this.usersService.findAll();
  }
```
