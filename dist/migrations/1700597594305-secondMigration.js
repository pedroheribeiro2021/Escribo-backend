"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecondMigration1700597594305 = void 0;
class SecondMigration1700597594305 {
    constructor() {
        this.name = 'SecondMigration1700597594305';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "users" ADD "data_criacao" TIMESTAMP NOT NULL DEFAULT now()`);
            yield queryRunner.query(`ALTER TABLE "users" ADD "data_atualizacao" TIMESTAMP NOT NULL DEFAULT now()`);
            yield queryRunner.query(`ALTER TABLE "users" ADD "ultimo_login" TIMESTAMP`);
            yield queryRunner.query(`ALTER TABLE "phone_number" DROP COLUMN "phone"`);
            yield queryRunner.query(`ALTER TABLE "phone_number" ADD "phone" character varying(12) NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "phone_number" DROP COLUMN "ddd"`);
            yield queryRunner.query(`ALTER TABLE "phone_number" ADD "ddd" character varying(2) NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3"`);
            yield queryRunner.query(`ALTER TABLE "users" DROP COLUMN "email"`);
            yield queryRunner.query(`ALTER TABLE "users" ADD "email" character varying(50) NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email")`);
            yield queryRunner.query(`ALTER TABLE "users" DROP COLUMN "password"`);
            yield queryRunner.query(`ALTER TABLE "users" ADD "password" character varying(20) NOT NULL`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "users" DROP COLUMN "password"`);
            yield queryRunner.query(`ALTER TABLE "users" ADD "password" character varying(100) NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3"`);
            yield queryRunner.query(`ALTER TABLE "users" DROP COLUMN "email"`);
            yield queryRunner.query(`ALTER TABLE "users" ADD "email" character varying(100) NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email")`);
            yield queryRunner.query(`ALTER TABLE "phone_number" DROP COLUMN "ddd"`);
            yield queryRunner.query(`ALTER TABLE "phone_number" ADD "ddd" character varying NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "phone_number" DROP COLUMN "phone"`);
            yield queryRunner.query(`ALTER TABLE "phone_number" ADD "phone" character varying NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "users" DROP COLUMN "ultimo_login"`);
            yield queryRunner.query(`ALTER TABLE "users" DROP COLUMN "data_atualizacao"`);
            yield queryRunner.query(`ALTER TABLE "users" DROP COLUMN "data_criacao"`);
        });
    }
}
exports.SecondMigration1700597594305 = SecondMigration1700597594305;
