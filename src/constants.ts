import * as dotenv from 'dotenv';
dotenv.config();

export const TypeOrmConfig = {
  type: 'postgres',
  host: process.env.PG_DB_HOST,
  port: parseInt(process.env.PG_DB_PORT),
  username: process.env.PG_DB_USERNAME,
  password: process.env.PG_DB_PASSWORD,
  database: process.env.PG_DB_NAME,
  entities: ['./src/infrastructure/models/*.model{.ts,.js}'],
  migrations: ['./src/infrastructure/database/migration/*{.ts,.js}'],
  autoLoadEntities: true,
  uuidExtension: 'uuid-ossp',
  synchronize: false,
  logging: false,
  seeds: ['src/infrastructure/database/seeder/*{.ts,.js}'],
};

export const APP_PORT = process.env.PORT || 3000;
