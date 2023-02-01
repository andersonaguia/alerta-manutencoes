import { MigrationInterface, QueryRunner } from "typeorm";

export class frequencyEntity1675273606020 implements MigrationInterface {
    name = 'frequencyEntity1675273606020'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`maintenance_frequency\` (\`id\` int NOT NULL AUTO_INCREMENT, \`created_at\` datetime NOT NULL, \`updated_at\` datetime NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`maintenance_frequency\``);
    }

}
