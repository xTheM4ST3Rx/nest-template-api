// src/ormconfig.ts
import { Logger } from '@nestjs/common';
import { DataSourceOptions } from 'typeorm';

const dbType = process.env.DB_TYPE;

let dataSourceOptions: DataSourceOptions;

switch (dbType) {
  case 'postgres':
    dataSourceOptions = {
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: +process.env.POSTGRES_PORT,
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      synchronize: true, // Não use isso em produção
    };
    Logger.warn('Usando PostgreSQL');
    break;

  case 'sqlite':
  default:
    dataSourceOptions = {
      type: 'sqlite',
      database: './src/database/database.sqlite',
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      synchronize: true, // Não use isso em produção
    };
    Logger.warn('Usando SQLite em memória');
    break;
}

export default dataSourceOptions;
