import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import ntlm from 'express-ntlm';

@Injectable()
export class NTLMMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    // Исключаем /health и /metrics
    if (req.path === '/health' || req.baseUrl === '/metrics') {
      return next();
    }
    return ntlm({
      domain: process.env.DOMAIN,
      domaincontroller: process.env.DOMAIN_CONTROLLER,
      // password: 'DOMAIN_PASSWORD',
    })(req, res, next);
  }
}

export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(NTLMMiddleware).forRoutes('*'); // Применяем ко всем маршрутам
  }
}
