import { MigrationInterface, QueryRunner } from "typeorm";

export class alterTablename1675524817457 implements MigrationInterface {
    name = 'alterTablename1675524817457'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`maintenance_mail\` (\`id\` int NOT NULL AUTO_INCREMENT, \`address\` varchar(255) NOT NULL, \`created_at\` datetime NOT NULL, \`updated_at\` datetime NOT NULL, UNIQUE INDEX \`IDX_14e57c8fea3e461551476fc8ec\` (\`address\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`maintenance_preventive\` DROP FOREIGN KEY \`FK_a095c2b3ee4780c6d04e52b9d3e\``);
        await queryRunner.query(`ALTER TABLE \`maintenance_preventive\` DROP FOREIGN KEY \`FK_9a4aa926ff43e17b70d4d1a71da\``);
        await queryRunner.query(`ALTER TABLE \`maintenance_preventive\` DROP FOREIGN KEY \`FK_3a01fbf57a473b71cd98bff2b03\``);
        await queryRunner.query(`ALTER TABLE \`maintenance_preventive\` CHANGE \`maintenance_frequency_id\` \`maintenance_frequency_id\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`maintenance_preventive\` CHANGE \`maintenance_category_id\` \`maintenance_category_id\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`maintenance_preventive\` CHANGE \`maintenance_responsible_id\` \`maintenance_responsible_id\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`maintenance_preventive\` CHANGE \`maintenance_frequency_id\` \`maintenance_frequency_id\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`maintenance_preventive\` CHANGE \`maintenance_category_id\` \`maintenance_category_id\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`maintenance_preventive\` CHANGE \`maintenance_responsible_id\` \`maintenance_responsible_id\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`maintenance_preventive\` ADD CONSTRAINT \`FK_a095c2b3ee4780c6d04e52b9d3e\` FOREIGN KEY (\`maintenance_frequency_id\`) REFERENCES \`maintenance_frequency\`(\`id\`) ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`maintenance_preventive\` ADD CONSTRAINT \`FK_9a4aa926ff43e17b70d4d1a71da\` FOREIGN KEY (\`maintenance_category_id\`) REFERENCES \`maintenance_category\`(\`id\`) ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`maintenance_preventive\` ADD CONSTRAINT \`FK_3a01fbf57a473b71cd98bff2b03\` FOREIGN KEY (\`maintenance_responsible_id\`) REFERENCES \`maintenance_responsible\`(\`id\`) ON DELETE SET NULL ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`maintenance_preventive\` DROP FOREIGN KEY \`FK_3a01fbf57a473b71cd98bff2b03\``);
        await queryRunner.query(`ALTER TABLE \`maintenance_preventive\` DROP FOREIGN KEY \`FK_9a4aa926ff43e17b70d4d1a71da\``);
        await queryRunner.query(`ALTER TABLE \`maintenance_preventive\` DROP FOREIGN KEY \`FK_a095c2b3ee4780c6d04e52b9d3e\``);
        await queryRunner.query(`ALTER TABLE \`maintenance_preventive\` CHANGE \`maintenance_responsible_id\` \`maintenance_responsible_id\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`maintenance_preventive\` CHANGE \`maintenance_category_id\` \`maintenance_category_id\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`maintenance_preventive\` CHANGE \`maintenance_frequency_id\` \`maintenance_frequency_id\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`maintenance_preventive\` CHANGE \`maintenance_responsible_id\` \`maintenance_responsible_id\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`maintenance_preventive\` CHANGE \`maintenance_category_id\` \`maintenance_category_id\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`maintenance_preventive\` CHANGE \`maintenance_frequency_id\` \`maintenance_frequency_id\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`maintenance_preventive\` ADD CONSTRAINT \`FK_3a01fbf57a473b71cd98bff2b03\` FOREIGN KEY (\`maintenance_responsible_id\`) REFERENCES \`maintenance_responsible\`(\`id\`) ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`maintenance_preventive\` ADD CONSTRAINT \`FK_9a4aa926ff43e17b70d4d1a71da\` FOREIGN KEY (\`maintenance_category_id\`) REFERENCES \`maintenance_category\`(\`id\`) ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`maintenance_preventive\` ADD CONSTRAINT \`FK_a095c2b3ee4780c6d04e52b9d3e\` FOREIGN KEY (\`maintenance_frequency_id\`) REFERENCES \`maintenance_frequency\`(\`id\`) ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`DROP INDEX \`IDX_14e57c8fea3e461551476fc8ec\` ON \`maintenance_mail\``);
        await queryRunner.query(`DROP TABLE \`maintenance_mail\``);
    }

}
