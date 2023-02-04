import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "maintenance_mail" })
export class MailEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        unique: true
    })
    address: string;

    @Column()
    created_at: Date;

    @Column()
    updated_at: Date;
}