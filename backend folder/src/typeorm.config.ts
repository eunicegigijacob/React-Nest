/* eslint-disable prettier/prettier */
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Product } from './products/entities/product.entity';
import * as dotenv from 'dotenv';

dotenv.config();

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mongodb',
  // host: 'localhost',
  // port: 27017,
  // database: 'nest-api',
  url: process.env.DB_URL,
  entities: [Product],
  synchronize: true,
};
