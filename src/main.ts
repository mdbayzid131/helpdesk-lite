import { NestFactory } from '@nestjs/core';
import { AppModule, } from './app.module.js';
import { ValidationPipe } from '@nestjs/common';
import { ResponceInterceptor } from './common/responce.interceptor.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist:true,
      forbidNonWhitelisted:true
    })
  )
  app.useGlobalInterceptors(new ResponceInterceptor)
  await app.listen(process.env.PORT ?? 3000);
}
await bootstrap();
