import { NestFactory } from '@nestjs/core'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

	const config = new DocumentBuilder()
    .setTitle('Prisma Examples')
    .setDescription('The prisma-examples REST API definition')
    .setVersion('1.0')
    .addServer('https://tesvan.com/service')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(4000)
}
bootstrap()
