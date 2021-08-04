import { NestFactory } from '@nestjs/core';
import { LoggingInterceptor } from './app.interceptor';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn', 'debug', 'log'],
  });
  app.useGlobalInterceptors(new LoggingInterceptor());
  await app.listen(8888);
}
bootstrap();
