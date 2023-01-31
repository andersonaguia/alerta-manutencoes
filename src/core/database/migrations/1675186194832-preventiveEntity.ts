import { MigrationInterface, QueryRunner } from "typeorm";

export class preventiveEntity1675186194832 implements MigrationInterface {
    name = 'preventiveEntity1675186194832'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`preventive_maintenance\` (\`id\` int NOT NULL AUTO_INCREMENT, \`category\` varchar(255) NOT NULL, \`activity\` varchar(255) NOT NULL, \`frequency\` enum ('0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11') NOT NULL DEFAULT '3', \`responsible\` varchar(255) NOT NULL, \`last\` datetime NOT NULL, \`next\` datetime NOT NULL, \`sendEmail\` tinyint NOT NULL, UNIQUE INDEX \`IDX_1d563d7fc4d9815b15f8a4e9ce\` (\`category\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_1d563d7fc4d9815b15f8a4e9ce\` ON \`preventive_maintenance\``);
        await queryRunner.query(`DROP TABLE \`preventive_maintenance\``);
    }

}
