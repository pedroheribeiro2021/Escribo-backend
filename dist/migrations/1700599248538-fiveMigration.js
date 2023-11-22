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
exports.FiveMigration1700599248538 = void 0;
class FiveMigration1700599248538 {
    constructor() {
        this.name = 'FiveMigration1700599248538';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "users" ADD "last_login" TIMESTAMP`);
            yield queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3"`);
            yield queryRunner.query(`ALTER TABLE "users" DROP COLUMN "email"`);
            yield queryRunner.query(`ALTER TABLE "users" ADD "email" character varying(100) NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email")`);
            yield queryRunner.query(`ALTER TABLE "users" DROP COLUMN "password"`);
            yield queryRunner.query(`ALTER TABLE "users" ADD "password" character varying(100) NOT NULL`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "users" DROP COLUMN "password"`);
            yield queryRunner.query(`ALTER TABLE "users" ADD "password" character varying(20) NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3"`);
            yield queryRunner.query(`ALTER TABLE "users" DROP COLUMN "email"`);
            yield queryRunner.query(`ALTER TABLE "users" ADD "email" character varying(50) NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email")`);
            yield queryRunner.query(`ALTER TABLE "users" DROP COLUMN "last_login"`);
        });
    }
}
exports.FiveMigration1700599248538 = FiveMigration1700599248538;
