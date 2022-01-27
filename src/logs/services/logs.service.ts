import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LogEntity } from '../entities/log.entity';
import { LogsRepository } from '../logs.repository';
import { CreateLogDto } from '../models/create-log.dto';
import { GetLogsFilterDto } from '../models/get-logs.dto';

@Injectable()
export class LogsService {
    constructor(
        @InjectRepository(LogsRepository)
        private logRepository: LogsRepository) {
    }

    /**
     * Create new log entity
     * 
     * @param logDto 
     * @returns LogEntity instance
     */
    createLog(logDto: CreateLogDto): Promise<LogEntity> {

        return this.logRepository.createLog(logDto);

    }

    /**
     * Get logs based on conditions which is passed as search filter
     * 
     * @param logsFilter 
     * @returns LogEntity array
     */
    getLogs(logsFilter: GetLogsFilterDto): Promise<LogEntity[]> {
        return this.logRepository.getLogs(logsFilter);
    }

    /**
     * Only for test. To clear log table for test
     * 
     * @returns void
     */
    removeAll() {
        return this.logRepository.removeAll();
    }
}
