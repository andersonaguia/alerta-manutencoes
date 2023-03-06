import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "maintenance_responsible" })
export class ResponsibleEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        unique: true
    })
    responsible: string;

    @Column()
    created_at: Date;

    @Column()
    updated_at: Date;
}