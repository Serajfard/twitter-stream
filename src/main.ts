import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    cors: true,
  });

  const config = new DocumentBuilder()
    .setTitle('Log Aggregation API')
    .setDescription('The log aggregation API description')
    .setVersion('1.0')
    .addBearerAuth()
    .addTag('logs')
    .setBasePath('api')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, forbidNonWhitelisted: true
  }));

  await app.listen(3001, '0.0.0.0');
}
bootstrap();
