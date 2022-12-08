"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const typeorm_1 = require("@nestjs/typeorm");
const disorders_entity_1 = require("./entity/disorders.entity");
const disorders_module_1 = require("./disorders/disorders.module");
const advices_entity_1 = require("./entity/advices.entity");
const apps_entity_1 = require("./entity/apps.entity");
const articles_entity_1 = require("./entity/articles.entity");
const clinics_entity_1 = require("./entity/clinics.entity");
const podcasts_entity_1 = require("./entity/podcasts.entity");
const psychiatrists_entity_1 = require("./entity/psychiatrists.entity");
const psychologist_entity_1 = require("./entity/psychologist.entity");
const tests_entity_1 = require("./entity/tests.entity");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: 'localhost',
                port: 3307,
                username: 'root',
                password: '',
                database: 'psycho',
                entities: [disorders_entity_1.Disorders, advices_entity_1.Advices, apps_entity_1.Apps, articles_entity_1.Articles, clinics_entity_1.Clinics, podcasts_entity_1.Podcasts, psychiatrists_entity_1.Psychiatrists, psychologist_entity_1.Psychologist, tests_entity_1.Tests],
                synchronize: true,
            }),
            disorders_module_1.DisordersModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map