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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisordersController = void 0;
const common_1 = require("@nestjs/common");
const createDisorder_dto_1 = require("../dto/createDisorder.dto");
const updateDisorders_dto_1 = require("../dto/updateDisorders.dto");
const disorders_service_1 = require("./disorders.service");
const createAdvices_dto_1 = require("../dto/createAdvices.dto");
const createApps_dto_1 = require("../dto/createApps.dto");
const createArticles_dto_1 = require("../dto/createArticles.dto");
const createClinics_dto_1 = require("../dto/createClinics.dto");
const createPodcasts_dto_1 = require("../dto/createPodcasts.dto");
const createPsychiatrists_dto_1 = require("../dto/createPsychiatrists.dto");
const createPsychologist_dto_1 = require("../dto/createPsychologist.dto");
const createTests_dto_1 = require("../dto/createTests.dto");
let DisordersController = class DisordersController {
    constructor(disordersService) {
        this.disordersService = disordersService;
    }
    getDisorders() {
        return this.disordersService.findDisorders();
    }
    createDisorders(createDisordersDto) {
        return this.disordersService.createDisorders(createDisordersDto);
    }
    async updateDisordersById(id, updateDisordersDto) {
        await this.disordersService.updateDisorders(id, updateDisordersDto);
    }
    CreateAdvices(id, createAdvicesDto) {
        return this.disordersService.CreateAdvices(id, createAdvicesDto);
    }
    CreateApps(id, createAppsDto) {
        return this.disordersService.CreateApps(id, createAppsDto);
    }
    CreateArticles(id, createArticlesDto) {
        return this.disordersService.CreateArticles(id, createArticlesDto);
    }
    CreateClinics(id, createClinicsDto) {
        return this.disordersService.CreateClinics(id, createClinicsDto);
    }
    CreatePodcasts(id, createPodcastsDto) {
        return this.disordersService.CreatePodcasts(id, createPodcastsDto);
    }
    CreatePsychiatrists(id, createPsychiatristsDto) {
        return this.disordersService.CreatePsychiatrists(id, createPsychiatristsDto);
    }
    CreatePsychologist(id, createPsychologistDto) {
        return this.disordersService.CreatePsychologist(id, createPsychologistDto);
    }
    CreateTests(id, createTestsDto) {
        return this.disordersService.CreateTests(id, createTestsDto);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DisordersController.prototype, "getDisorders", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createDisorder_dto_1.CreateDisordersDto]),
    __metadata("design:returntype", void 0)
], DisordersController.prototype, "createDisorders", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, updateDisorders_dto_1.UpdateDisordersDto]),
    __metadata("design:returntype", Promise)
], DisordersController.prototype, "updateDisordersById", null);
__decorate([
    (0, common_1.Post)(':id/name'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, createAdvices_dto_1.CreateAdvicesDto]),
    __metadata("design:returntype", void 0)
], DisordersController.prototype, "CreateAdvices", null);
__decorate([
    (0, common_1.Post)(':id/name'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, createApps_dto_1.CreateAppsDto]),
    __metadata("design:returntype", void 0)
], DisordersController.prototype, "CreateApps", null);
__decorate([
    (0, common_1.Post)(':id/name'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, createArticles_dto_1.CreateArticlesDto]),
    __metadata("design:returntype", void 0)
], DisordersController.prototype, "CreateArticles", null);
__decorate([
    (0, common_1.Post)(':id/name'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, createClinics_dto_1.CreateClinicsDto]),
    __metadata("design:returntype", void 0)
], DisordersController.prototype, "CreateClinics", null);
__decorate([
    (0, common_1.Post)(':id/name'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, createPodcasts_dto_1.CreatePodcastsDto]),
    __metadata("design:returntype", void 0)
], DisordersController.prototype, "CreatePodcasts", null);
__decorate([
    (0, common_1.Post)(':id/name'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, createPsychiatrists_dto_1.CreatePsychiatristsDto]),
    __metadata("design:returntype", void 0)
], DisordersController.prototype, "CreatePsychiatrists", null);
__decorate([
    (0, common_1.Post)(':id/name'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, createPsychologist_dto_1.CreatePsychologistDto]),
    __metadata("design:returntype", void 0)
], DisordersController.prototype, "CreatePsychologist", null);
__decorate([
    (0, common_1.Post)(':id/name'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, createTests_dto_1.CreateTestsDto]),
    __metadata("design:returntype", void 0)
], DisordersController.prototype, "CreateTests", null);
DisordersController = __decorate([
    (0, common_1.Controller)('disorders'),
    __metadata("design:paramtypes", [disorders_service_1.DisordersService])
], DisordersController);
exports.DisordersController = DisordersController;
//# sourceMappingURL=disorders.controller.js.map