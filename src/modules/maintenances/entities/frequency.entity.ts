import { PreventiveEntity } from "src/modules/preventive/entities/preventive.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "maintenance_frequency" })
export class FrequencyEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        unique: true
    })
    frequency: string;

    @Column()
    created_at: Date;

    @Column()
    updated_at: Date;
}