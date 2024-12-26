import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import { logger } from '@repo/logger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env['PORT']!, () => {
    logger.info(`Server started on port ${process.env['PORT']}`);
  });
}
bootstrap();
