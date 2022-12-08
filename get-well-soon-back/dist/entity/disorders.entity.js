"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Disorders = void 0;
const typeorm_1 = require("typeorm");
const advices_entity_1 = require("./advices.entity");
const apps_entity_1 = require("./apps.entity");
const articles_entity_1 = require("./articles.entity");
const clinics_entity_1 = require("./clinics.entity");
const podcasts_entity_1 = require("./podcasts.entity");
const psychiatrists_entity_1 = require("./psychiatrists.entity");
const psychologist_entity_1 = require("./psychologist.entity");
const tests_entity_1 = require("./tests.entity");
let Disorders = class Disorders {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Disorders.prototype, "id_disorder", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Disorders.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Disorders.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Disorders.prototype, "link", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => advices_entity_1.Advices),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], Disorders.prototype, "advices", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => apps_entity_1.Apps),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Array)
], Disorders.prototype, "apps", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => articles_entity_1.Articles),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", articles_entity_1.Articles)
], Disorders.prototype, "articles", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => clinics_entity_1.Clinics),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Array)
], Disorders.prototype, "clinics", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => podcasts_entity_1.Podcasts),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", podcasts_entity_1.Podcasts)
], Disorders.prototype, "podcasts", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => psychiatrists_entity_1.Psychiatrists),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Array)
], Disorders.prototype, "psychiatrists", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => psychologist_entity_1.Psychologist),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Array)
], Disorders.prototype, "psychologists", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => tests_entity_1.Tests),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", tests_entity_1.Tests)
], Disorders.prototype, "tests", void 0);
Disorders = __decorate([
    (0, typeorm_1.Entity)()
], Disorders);
exports.Disorders = Disorders;
//# sourceMappingURL=disorders.entity.js.map