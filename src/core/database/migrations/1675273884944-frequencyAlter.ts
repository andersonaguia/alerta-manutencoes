import { MigrationInterface, QueryRunner } from "typeorm";

export class frequencyAlter1675273884944 implements MigrationInterface {
    name = 'frequencyAlter1675273884944'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`maintenance_frequency\` ADD \`frequency\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`preventive_maintenance\` ADD \`maintenance_frequency_id\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`preventive_maintenance\` ADD CONSTRAINT \`FK_a6f7049cd2d72ae32d3d8a87660\` FOREIGN KEY (\`maintenance_frequency_id\`) REFERENCES \`maintenance_frequency\`(\`id\`) ON DELETE SET NULL ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`preventive_maintenance\` DROP FOREIGN KEY \`FK_a6f7049cd2d72ae32d3d8a87660\``);
        await queryRunner.query(`ALTER TABLE \`preventive_maintenance\` DROP COLUMN \`maintenance_frequency_id\``);
        await queryRunner.query(`ALTER TABLE \`maintenance_frequency\` DROP COLUMN \`frequency\``);
    }

}
