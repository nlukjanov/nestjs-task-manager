import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as config from 'config';

const dbConfig = config.get('db');

const host = process.env.CLOUD_SQL_CONNECTION_NAME;

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: dbConfig.type,
  host: host || dbConfig.host,
  extra: {
    socketPath: host,
  },
  username: process.env.DB_USER || dbConfig.username,
  password: process.env.DB_PASS || dbConfig.password,
  database: process.env.DB_NAME || dbConfig.database,
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: dbConfig.synchronize,
};
