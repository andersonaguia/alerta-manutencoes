import { MigrationInterface, QueryRunner } from "typeorm";

export class preventiveNullable1675186654048 implements MigrationInterface {
    name = 'preventiveNullable1675186654048'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_1d563d7fc4d9815b15f8a4e9ce\` ON \`preventive_maintenance\``);
        await queryRunner.query(`ALTER TABLE \`preventive_maintenance\` DROP COLUMN \`category\``);
        await queryRunner.query(`ALTER TABLE \`preventive_maintenance\` ADD \`category\` varchar(100) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`preventive_maintenance\` DROP COLUMN \`responsible\``);
        await queryRunner.query(`ALTER TABLE \`preventive_maintenance\` ADD \`responsible\` varchar(100) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`preventive_maintenance\` CHANGE \`sendEmail\` \`sendEmail\` tinyint NOT NULL DEFAULT 1`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`preventive_maintenance\` CHANGE \`sendEmail\` \`sendEmail\` tinyint NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`preventive_maintenance\` DROP COLUMN \`responsible\``);
        await queryRunner.query(`ALTER TABLE \`preventive_maintenance\` ADD \`responsible\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`preventive_maintenance\` DROP COLUMN \`category\``);
        await queryRunner.query(`ALTER TABLE \`preventive_maintenance\` ADD \`category\` varchar(255) NOT NULL`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`IDX_1d563d7fc4d9815b15f8a4e9ce\` ON \`preventive_maintenance\` (\`category\`)`);
    }

}
