import { MigrationInterface, QueryRunner } from "typeorm";

export class change1675273525800 implements MigrationInterface {
    name = 'change1675273525800'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`preventive_maintenance\` DROP COLUMN \`frequency\``);
        await queryRunner.query(`ALTER TABLE \`preventive_maintenance\` DROP COLUMN \`category\``);
        await queryRunner.query(`ALTER TABLE \`preventive_maintenance\` DROP COLUMN \`responsible\``);
        await queryRunner.query(`ALTER TABLE \`preventive_maintenance\` ADD \`created_at\` datetime NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`preventive_maintenance\` ADD \`updated_at\` datetime NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`preventive_maintenance\` DROP COLUMN \`updated_at\``);
        await queryRunner.query(`ALTER TABLE \`preventive_maintenance\` DROP COLUMN \`created_at\``);
        await queryRunner.query(`ALTER TABLE \`preventive_maintenance\` ADD \`responsible\` varchar(100) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`preventive_maintenance\` ADD \`category\` varchar(100) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`preventive_maintenance\` ADD \`frequency\` enum ('0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11') NOT NULL DEFAULT ''3''`);
    }

}
