import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "maintenance_category" })
export class CategoryEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        unique: true
    })
    category: string;

    @Column()
    created_at: Date;

    @Column()
    updated_at: Date;
}
