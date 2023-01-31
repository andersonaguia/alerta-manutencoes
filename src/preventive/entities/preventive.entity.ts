import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Frequency } from "../enum/frequency.enum";

@Entity({name: "preventive_maintenance"})
export class PreventiveEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 100,
        nullable: false
    })
    category: string;

    @Column({
        nullable: false
    })
    activity: string;

    @Column({
        type: "enum",
        enum: Frequency,
        default: Frequency.MENSAL,
        nullable: false
    })
    frequency: Frequency;

    @Column({
        length: 100
    })
    responsible: string;

    @Column()
    last: Date;

    @Column()
    next: Date;

    @Column({
        default: true
    })
    sendEmail: boolean;
}
