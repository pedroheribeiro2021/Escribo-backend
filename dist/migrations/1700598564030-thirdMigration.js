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
exports.ThirdMigration1700598564030 = void 0;
class ThirdMigration1700598564030 {
    constructor() {
        this.name = 'ThirdMigration1700598564030';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "users" DROP COLUMN "data_criacao"`);
            yield queryRunner.query(`ALTER TABLE "users" DROP COLUMN "data_atualizacao"`);
            yield queryRunner.query(`ALTER TABLE "users" DROP COLUMN "ultimo_login"`);
            yield queryRunner.query(`ALTER TABLE "users" ADD "created_at" TIMESTAMP NOT NULL DEFAULT now()`);
            yield queryRunner.query(`ALTER TABLE "users" ADD "updated_at" TIMESTAMP NOT NULL DEFAULT now()`);
            yield queryRunner.query(`ALTER TABLE "users" ADD "last_login" TIMESTAMP`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "users" DROP COLUMN "last_login"`);
            yield queryRunner.query(`ALTER TABLE "users" DROP COLUMN "updated_at"`);
            yield queryRunner.query(`ALTER TABLE "users" DROP COLUMN "created_at"`);
            yield queryRunner.query(`ALTER TABLE "users" ADD "ultimo_login" TIMESTAMP`);
            yield queryRunner.query(`ALTER TABLE "users" ADD "data_atualizacao" TIMESTAMP NOT NULL DEFAULT now()`);
            yield queryRunner.query(`ALTER TABLE "users" ADD "data_criacao" TIMESTAMP NOT NULL DEFAULT now()`);
        });
    }
}
exports.ThirdMigration1700598564030 = ThirdMigration1700598564030;
