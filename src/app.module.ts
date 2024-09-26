import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MemberController } from './application/controllers/member.controller';
import { MemberService } from './domain/member/member.service';
import dataSource from './infrastructure/database/data-source';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `${process.cwd()}/.env.${process.env.NODE_ENV || 'development'}`,
      load: [dataSource],
    }),
  ],
  controllers: [AppController, MemberController],
  providers: [AppService, MemberService],
})
export class AppModule {}
