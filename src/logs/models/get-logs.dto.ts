import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";

export class GetLogsFilterDto {
    @IsOptional()
    @IsString()
    @ApiPropertyOptional()
    from: string;
}