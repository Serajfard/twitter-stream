import { IsNotEmpty, IsString } from "class-validator"
import { ApiProperty } from '@nestjs/swagger';

export class CreateLogDto {
    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    from: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    log: string;
}