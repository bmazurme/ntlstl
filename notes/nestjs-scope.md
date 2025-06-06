### module
```js
import { Module } from '@nestjs/common';

import { StoreService } from './store.service';

@Module({
  providers: [StoreService], // Зарегистрируем провайдер
  exports: [StoreService], // Экспортируем его для других модулей
})
export class StoreModule {}
```

### service
```js
import { Injectable, Scope } from '@nestjs/common';

import { StoreType } from './store.type';

@Injectable({ scope: Scope.DEFAULT })
export class StoreService {
  private readonly data: StoreType = {
    principal: null,
    requestTextToLog: null,
  };

  setData(key: string, value: string) {
    this.data[key] = value;
  }

  getData(key: 'principal'): string | null {
    return this.data[key];
  }
}

```

### type
```js
export type StoreType = {
  principal: string | null;
  requestTextToLog: string | null;
};

```
