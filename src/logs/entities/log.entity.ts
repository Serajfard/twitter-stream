
import { BaseEntity } from "../../shared/base.entity";
import { Column, Entity } from "typeorm";

@Entity()
export class LogEntity extends BaseEntity {

    @Column()
    from: string;

    @Column()
    log: string;

}