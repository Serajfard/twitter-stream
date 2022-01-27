import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LogsRepository } from '../logs.repository';
import { LogsService } from '../services/logs.service';
import { LogsController } from './logs.controller';
import { sqlite_connection_test } from '../../config';
import { LogEntity } from '../entities/log.entity';
import { GetLogsFilterDto } from '../models/get-logs.dto';
import { CreateLogDto } from '../models/create-log.dto';

describe('LogsController', () => {
  let controller: LogsController;
  let logService: LogsService;

  const from = 'from 1';
  const log = '{ data : "test data" }';

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot(sqlite_connection_test),
        TypeOrmModule.forFeature([LogsRepository])
      ],
      controllers: [LogsController],
      providers: [LogsService]
    }).compile();

    controller = module.get<LogsController>(LogsController);
    logService = module.get<LogsService>(LogsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('removing all logs from db', async () => {
    await logService.removeAll();
    const logs: LogEntity[] = await logService.getLogs(new GetLogsFilterDto());
    expect(logs.length).toBe(0);
  });

  it('create new log', async () => {
    const logDto: CreateLogDto = { from, log };
    const savedData: LogEntity = await controller.createLog(logDto);
    expect(savedData).toBeDefined();
    expect(savedData).toHaveProperty('from', from);
    expect(savedData).toHaveProperty('log', log);
    expect(savedData).toHaveProperty('id');
  });

  it('get log with filter', async () => {
    const filterDto: GetLogsFilterDto = { from };
    const logs: LogEntity[] = await controller.getLogs(filterDto);
    expect(logs.length).toBeGreaterThanOrEqual(1);
    expect(logs[0]).toHaveProperty('from', from);
  });


});
