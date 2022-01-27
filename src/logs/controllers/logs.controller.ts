import { Body, Controller, Post, Get, Query } from '@nestjs/common';
import { LogEntity } from '../entities/log.entity';
import { CreateLogDto } from '../models/create-log.dto';
import { GetLogsFilterDto } from '../models/get-logs.dto';
import { LogsService } from '../services/logs.service';

@Controller('logs')
export class LogsController {
    constructor(
        private logsService: LogsService
    ) { }

    /**
     * Create log controller which handle Post request
     * 
     * @param createLogDto 
     * @returns LogEntity instans
     */
    @Post()
    createLog(@Body() createLogDto: CreateLogDto): Promise<LogEntity> {
        return this.logsService.createLog(createLogDto);
    }

    @Get()
    getLogs(@Query() filterDto: GetLogsFilterDto): Promise<LogEntity[]> {
        return this.logsService.getLogs(filterDto);
    }
}
