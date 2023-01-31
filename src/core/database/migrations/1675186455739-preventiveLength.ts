import { MigrationInterface, QueryRunner } from "typeorm";

export class preventiveLength1675186455739 implements MigrationInterface {
    name = 'preventiveLength1675186455739'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_1d563d7fc4d9815b15f8a4e9ce\` ON \`preventive_maintenance\``);
        await queryRunner.query(`ALTER TABLE \`preventive_maintenance\` DROP COLUMN \`category\``);
        await queryRunner.query(`ALTER TABLE \`preventive_maintenance\` ADD \`category\` varchar(100) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`preventive_maintenance\` DROP COLUMN \`responsible\``);
        await queryRunner.query(`ALTER TABLE \`preventive_maintenance\` ADD \`responsible\` varchar(100) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`preventive_maintenance\` DROP COLUMN \`category\``);
        await queryRunner.query(`ALTER TABLE \`preventive_maintenance\` ADD \`category\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`preventive_maintenance\` ADD UNIQUE INDEX \`IDX_1d563d7fc4d9815b15f8a4e9ce\` (\`category\`)`);
        await queryRunner.query(`ALTER TABLE \`preventive_maintenance\` DROP COLUMN \`responsible\``);
        await queryRunner.query(`ALTER TABLE \`preventive_maintenance\` ADD \`responsible\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`preventive_maintenance\` DROP COLUMN \`responsible\``);
        await queryRunner.query(`ALTER TABLE \`preventive_maintenance\` ADD \`responsible\` varchar(100) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`preventive_maintenance\` DROP INDEX \`IDX_1d563d7fc4d9815b15f8a4e9ce\``);
        await queryRunner.query(`ALTER TABLE \`preventive_maintenance\` DROP COLUMN \`category\``);
        await queryRunner.query(`ALTER TABLE \`preventive_maintenance\` ADD \`category\` varchar(100) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`preventive_maintenance\` DROP COLUMN \`responsible\``);
        await queryRunner.query(`ALTER TABLE \`preventive_maintenance\` ADD \`responsible\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`preventive_maintenance\` DROP COLUMN \`category\``);
        await queryRunner.query(`ALTER TABLE \`preventive_maintenance\` ADD \`category\` varchar(255) NOT NULL`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`IDX_1d563d7fc4d9815b15f8a4e9ce\` ON \`preventive_maintenance\` (\`category\`)`);
    }

}
