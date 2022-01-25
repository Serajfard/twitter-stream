import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { sqlite_connection } from './config';
import { LogsModule } from './logs/logs.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(sqlite_connection),
    LogsModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
