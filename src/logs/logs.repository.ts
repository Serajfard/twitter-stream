import { EntityRepository, Repository } from "typeorm";
import { LogEntity } from "./entities/log.entity";
import { CreateLogDto } from "./models/create-log.dto";
import { GetLogsFilterDto } from "./models/get-logs.dto";

@EntityRepository(LogEntity)
export class LogsRepository extends Repository<LogEntity>{

    async createLog(logDto: CreateLogDto): Promise<LogEntity> {
        const { from, log } = logDto;
        const logEntity: LogEntity = this.create({
            from,
            log
        });

        const savedData = await this.save(logEntity);

        return savedData;
    }

    async getLogs(filter: GetLogsFilterDto): Promise<LogEntity[]> {
        const { from } = filter;
        const query = this.createQueryBuilder("logs");

        if (from) {
            query.andWhere("LOWER(logs.from) like :from", { from: `%${from.toLowerCase()}%` });
        }

        const logs = await query.getMany();
        return logs;
    }

    /**
     * Only for test. To clear log table for test
     */
    async removeAll(): Promise<void> {
        await this.delete({});
    }

}