```js
import { Test, TestingModule } from '@nestjs/testing';
import { ProxyService } from './proxy.service';

describe('ProxyService', () => {
  let service: ProxyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProxyService,
        {
          provide: 'CACHE_MANAGER', // Создаем мок-провайдер
          useValue: {
            get: jest.fn(),
            set: jest.fn(),
            del: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<ProxyService>(ProxyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
```

```js
// cache.module.ts
@Module({
  imports: [CacheModule.register()],
  exports: [CACHE_MANAGER],
})
export class CacheModule {}

// proxy.service.spec.ts
import { Test, TestingModule } from '@nestjs/testing';
import { ProxyService } from './proxy.service';
import { CacheModule } from './cache.module'; // Импортируем ваш модуль

describe('ProxyService', () => {
  let service: ProxyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [CacheModule], // Импортируем ваш модуль
      providers: [ProxyService],
    }).compile();

    service = module.get<ProxyService>(ProxyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
```
