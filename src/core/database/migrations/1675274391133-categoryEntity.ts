import { MigrationInterface, QueryRunner } from "typeorm";

export class categoryEntity1675274391133 implements MigrationInterface {
    name = 'categoryEntity1675274391133'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`maintenance_category\` (\`id\` int NOT NULL AUTO_INCREMENT, \`category\` varchar(255) NOT NULL, \`created_at\` datetime NOT NULL, \`updated_at\` datetime NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`preventive_maintenance\` DROP FOREIGN KEY \`FK_a6f7049cd2d72ae32d3d8a87660\``);
        await queryRunner.query(`ALTER TABLE \`preventive_maintenance\` DROP FOREIGN KEY \`FK_dae36febfce1cc125b3136473df\``);
        await queryRunner.query(`ALTER TABLE \`preventive_maintenance\` CHANGE \`maintenance_frequency_id\` \`maintenance_frequency_id\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`preventive_maintenance\` CHANGE \`maintenance_responsible_id\` \`maintenance_responsible_id\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`preventive_maintenance\` CHANGE \`maintenance_frequency_id\` \`maintenance_frequency_id\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`preventive_maintenance\` CHANGE \`maintenance_responsible_id\` \`maintenance_responsible_id\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`preventive_maintenance\` ADD CONSTRAINT \`FK_a6f7049cd2d72ae32d3d8a87660\` FOREIGN KEY (\`maintenance_frequency_id\`) REFERENCES \`maintenance_frequency\`(\`id\`) ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`preventive_maintenance\` ADD CONSTRAINT \`FK_dae36febfce1cc125b3136473df\` FOREIGN KEY (\`maintenance_responsible_id\`) REFERENCES \`maintenance_responsible\`(\`id\`) ON DELETE SET NULL ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`preventive_maintenance\` DROP FOREIGN KEY \`FK_dae36febfce1cc125b3136473df\``);
        await queryRunner.query(`ALTER TABLE \`preventive_maintenance\` DROP FOREIGN KEY \`FK_a6f7049cd2d72ae32d3d8a87660\``);
        await queryRunner.query(`ALTER TABLE \`preventive_maintenance\` CHANGE \`maintenance_responsible_id\` \`maintenance_responsible_id\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`preventive_maintenance\` CHANGE \`maintenance_frequency_id\` \`maintenance_frequency_id\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`preventive_maintenance\` CHANGE \`maintenance_responsible_id\` \`maintenance_responsible_id\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`preventive_maintenance\` CHANGE \`maintenance_frequency_id\` \`maintenance_frequency_id\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`preventive_maintenance\` ADD CONSTRAINT \`FK_dae36febfce1cc125b3136473df\` FOREIGN KEY (\`maintenance_responsible_id\`) REFERENCES \`maintenance_responsible\`(\`id\`) ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`preventive_maintenance\` ADD CONSTRAINT \`FK_a6f7049cd2d72ae32d3d8a87660\` FOREIGN KEY (\`maintenance_frequency_id\`) REFERENCES \`maintenance_frequency\`(\`id\`) ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`DROP TABLE \`maintenance_category\``);
    }

}
