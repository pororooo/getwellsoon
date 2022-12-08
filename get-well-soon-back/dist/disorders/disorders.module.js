"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisordersModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const advices_entity_1 = require("../entity/advices.entity");
const disorders_entity_1 = require("../entity/disorders.entity");
const disorders_controller_1 = require("./disorders.controller");
const disorders_service_1 = require("./disorders.service");
const apps_entity_1 = require("../entity/apps.entity");
const articles_entity_1 = require("../entity/articles.entity");
const clinics_entity_1 = require("../entity/clinics.entity");
const podcasts_entity_1 = require("../entity/podcasts.entity");
const psychiatrists_entity_1 = require("../entity/psychiatrists.entity");
const psychologist_entity_1 = require("../entity/psychologist.entity");
const tests_entity_1 = require("../entity/tests.entity");
let DisordersModule = class DisordersModule {
};
DisordersModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([disorders_entity_1.Disorders, advices_entity_1.Advices, apps_entity_1.Apps, articles_entity_1.Articles, clinics_entity_1.Clinics, podcasts_entity_1.Podcasts, psychiatrists_entity_1.Psychiatrists, psychologist_entity_1.Psychologist, tests_entity_1.Tests])],
        controllers: [disorders_controller_1.DisordersController],
        providers: [disorders_service_1.DisordersService]
    })
], DisordersModule);
exports.DisordersModule = DisordersModule;
//# sourceMappingURL=disorders.module.js.map