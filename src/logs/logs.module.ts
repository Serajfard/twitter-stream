import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LogsController } from './controllers/logs.controller';
import { LogsRepository } from './logs.repository';
import { LogsService } from './services/logs.service';

@Module({
  imports: [TypeOrmModule.forFeature([LogsRepository])],
  controllers: [LogsController],
  providers: [LogsService]
})
export class LogsModule { }
