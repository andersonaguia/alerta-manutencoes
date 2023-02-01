import { MigrationInterface, QueryRunner } from "typeorm";

export class responsiblePreventive1675274184088 implements MigrationInterface {
    name = 'responsiblePreventive1675274184088'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`preventive_maintenance\` ADD \`maintenance_responsible_id\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`preventive_maintenance\` DROP FOREIGN KEY \`FK_a6f7049cd2d72ae32d3d8a87660\``);
        await queryRunner.query(`ALTER TABLE \`preventive_maintenance\` CHANGE \`maintenance_frequency_id\` \`maintenance_frequency_id\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`preventive_maintenance\` CHANGE \`maintenance_frequency_id\` \`maintenance_frequency_id\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`preventive_maintenance\` ADD CONSTRAINT \`FK_a6f7049cd2d72ae32d3d8a87660\` FOREIGN KEY (\`maintenance_frequency_id\`) REFERENCES \`maintenance_frequency\`(\`id\`) ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`preventive_maintenance\` ADD CONSTRAINT \`FK_dae36febfce1cc125b3136473df\` FOREIGN KEY (\`maintenance_responsible_id\`) REFERENCES \`maintenance_responsible\`(\`id\`) ON DELETE SET NULL ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`preventive_maintenance\` DROP FOREIGN KEY \`FK_dae36febfce1cc125b3136473df\``);
        await queryRunner.query(`ALTER TABLE \`preventive_maintenance\` DROP FOREIGN KEY \`FK_a6f7049cd2d72ae32d3d8a87660\``);
        await queryRunner.query(`ALTER TABLE \`preventive_maintenance\` CHANGE \`maintenance_frequency_id\` \`maintenance_frequency_id\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`preventive_maintenance\` CHANGE \`maintenance_frequency_id\` \`maintenance_frequency_id\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`preventive_maintenance\` ADD CONSTRAINT \`FK_a6f7049cd2d72ae32d3d8a87660\` FOREIGN KEY (\`maintenance_frequency_id\`) REFERENCES \`maintenance_frequency\`(\`id\`) ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`preventive_maintenance\` DROP COLUMN \`maintenance_responsible_id\``);
    }

}
