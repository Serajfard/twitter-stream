import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { sqlite_connection } from './config';
import { LogsModule } from './logs/logs.module';
import { AppGateway } from './app.gateway';
import { TwitterService } from './twitter/twitter.service';

@Module({
  imports: [
    TypeOrmModule.forRoot(sqlite_connection),
    LogsModule],
  controllers: [],
  providers: [AppGateway, TwitterService],
})
export class AppModule { }
