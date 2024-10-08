import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { apiReference } from '@scalar/nestjs-api-reference';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); // Habilita o CORS

  app.useGlobalPipes(new ValidationPipe()); // Habilita a validação dos DTOs

  const config = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('cats')
    .build();
  const document = SwaggerModule.createDocument(app, config);

  app.use(
    '/scalar',
    apiReference({
      spec: {
        content: document,
      },
    }),
  );

  SwaggerModule.setup('api', app, document);

  await app.listen(3000, () => {
    console.log('-----------------------');
    console.log('🎉 - Servidor Online !');
    console.log('\x1b[34m%s\x1b[0m', '🔗 - http://localhost:3000');
    console.log('\x1b[33m%s\x1b[0m', '📃 - http://localhost:3000/api');
    console.log('\x1b[33m%s\x1b[0m', '📃 - http://localhost:3000/scalar');
    console.log('-----------------------');
  });
}

bootstrap();
