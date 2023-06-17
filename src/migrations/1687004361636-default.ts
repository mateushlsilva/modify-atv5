import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1687004361636 implements MigrationInterface {
    name = 'Default1687004361636'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "namesocial" character varying NOT NULL, "genero" character varying NOT NULL, "cpf" character varying NOT NULL, "ddd" character varying NOT NULL, "telefone" character varying NOT NULL, "rg" character varying NOT NULL, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
