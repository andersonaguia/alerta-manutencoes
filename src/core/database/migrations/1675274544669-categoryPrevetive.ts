import { MigrationInterface, QueryRunner } from "typeorm";

export class categoryPrevetive1675274544669 implements MigrationInterface {
    name = 'categoryPrevetive1675274544669'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`maintenance_preventive\` (\`id\` int NOT NULL AUTO_INCREMENT, \`activity\` varchar(255) NOT NULL, \`last\` datetime NOT NULL, \`next\` datetime NOT NULL, \`sendEmail\` tinyint NOT NULL DEFAULT 1, \`created_at\` datetime NOT NULL, \`updated_at\` datetime NOT NULL, \`maintenance_frequency_id\` int NULL, \`maintenance_category_id\` int NULL, \`maintenance_responsible_id\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`preventive_maintenance\` DROP FOREIGN KEY \`FK_a6f7049cd2d72ae32d3d8a87660\``);
        await queryRunner.query(`ALTER TABLE \`preventive_maintenance\` DROP FOREIGN KEY \`FK_dae36febfce1cc125b3136473df\``);
        await queryRunner.query(`ALTER TABLE \`preventive_maintenance\` CHANGE \`maintenance_frequency_id\` \`maintenance_frequency_id\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`preventive_maintenance\` CHANGE \`maintenance_responsible_id\` \`maintenance_responsible_id\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`maintenance_preventive\` ADD CONSTRAINT \`FK_a095c2b3ee4780c6d04e52b9d3e\` FOREIGN KEY (\`maintenance_frequency_id\`) REFERENCES \`maintenance_frequency\`(\`id\`) ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`maintenance_preventive\` ADD CONSTRAINT \`FK_9a4aa926ff43e17b70d4d1a71da\` FOREIGN KEY (\`maintenance_category_id\`) REFERENCES \`maintenance_category\`(\`id\`) ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`maintenance_preventive\` ADD CONSTRAINT \`FK_3a01fbf57a473b71cd98bff2b03\` FOREIGN KEY (\`maintenance_responsible_id\`) REFERENCES \`maintenance_responsible\`(\`id\`) ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`preventive_maintenance\` ADD CONSTRAINT \`FK_a6f7049cd2d72ae32d3d8a87660\` FOREIGN KEY (\`maintenance_frequency_id\`) REFERENCES \`maintenance_frequency\`(\`id\`) ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`preventive_maintenance\` ADD CONSTRAINT \`FK_dae36febfce1cc125b3136473df\` FOREIGN KEY (\`maintenance_responsible_id\`) REFERENCES \`maintenance_responsible\`(\`id\`) ON DELETE SET NULL ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`preventive_maintenance\` DROP FOREIGN KEY \`FK_dae36febfce1cc125b3136473df\``);
        await queryRunner.query(`ALTER TABLE \`preventive_maintenance\` DROP FOREIGN KEY \`FK_a6f7049cd2d72ae32d3d8a87660\``);
        await queryRunner.query(`ALTER TABLE \`maintenance_preventive\` DROP FOREIGN KEY \`FK_3a01fbf57a473b71cd98bff2b03\``);
        await queryRunner.query(`ALTER TABLE \`maintenance_preventive\` DROP FOREIGN KEY \`FK_9a4aa926ff43e17b70d4d1a71da\``);
        await queryRunner.query(`ALTER TABLE \`maintenance_preventive\` DROP FOREIGN KEY \`FK_a095c2b3ee4780c6d04e52b9d3e\``);
        await queryRunner.query(`ALTER TABLE \`preventive_maintenance\` CHANGE \`maintenance_responsible_id\` \`maintenance_responsible_id\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`preventive_maintenance\` CHANGE \`maintenance_frequency_id\` \`maintenance_frequency_id\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`preventive_maintenance\` ADD CONSTRAINT \`FK_dae36febfce1cc125b3136473df\` FOREIGN KEY (\`maintenance_responsible_id\`) REFERENCES \`maintenance_responsible\`(\`id\`) ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`preventive_maintenance\` ADD CONSTRAINT \`FK_a6f7049cd2d72ae32d3d8a87660\` FOREIGN KEY (\`maintenance_frequency_id\`) REFERENCES \`maintenance_frequency\`(\`id\`) ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`DROP TABLE \`maintenance_preventive\``);
    }

}
