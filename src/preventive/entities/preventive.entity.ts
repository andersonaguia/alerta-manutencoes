import { CategoryEntity } from "src/maintenances/entities/category.entity";
import { FrequencyEntity } from "src/maintenances/entities/frequency.entity";
import { ResponsibleEntity } from "src/maintenances/entities/responsible.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "maintenance_preventive" })
export class PreventiveEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        nullable: false,
        type: "text"
    })
    activity: string;

    @ManyToOne(
        () => FrequencyEntity,
        (frequency) => frequency.id,
        { eager: true, onDelete: 'SET NULL' }
    )
    @JoinColumn({ name: 'maintenance_frequency_id' })
    frequency: FrequencyEntity;

    @ManyToOne(
        () => CategoryEntity,
        (category) => category.id,
        { eager: true, onDelete: 'SET NULL' }
    )
    @JoinColumn({ name: 'maintenance_category_id' })
    category: CategoryEntity;

    @ManyToOne(
        () => ResponsibleEntity,
        (responsible) => responsible.id,
        { eager: true, onDelete: 'SET NULL' }
    )
    @JoinColumn({ name: 'maintenance_responsible_id' })
    responsible: ResponsibleEntity;

    @Column()
    last: Date;

    @Column()
    next: Date;

    @Column({
        default: true
    })
    sendEmail: boolean;

    @Column()
    created_at: Date;

    @Column()
    updated_at: Date;
}
