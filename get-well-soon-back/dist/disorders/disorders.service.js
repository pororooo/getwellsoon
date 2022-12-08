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
exports.DisordersService = void 0;
const common_1 = require("@nestjs/common");
const disorders_entity_1 = require("../entity/disorders.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const common_2 = require("@nestjs/common");
const advices_entity_1 = require("../entity/advices.entity");
const apps_entity_1 = require("../entity/apps.entity");
const articles_entity_1 = require("../entity/articles.entity");
const clinics_entity_1 = require("../entity/clinics.entity");
const podcasts_entity_1 = require("../entity/podcasts.entity");
const psychiatrists_entity_1 = require("../entity/psychiatrists.entity");
const psychologist_entity_1 = require("../entity/psychologist.entity");
const tests_entity_1 = require("../entity/tests.entity");
let DisordersService = class DisordersService {
    constructor(disordersRepository, advicesRepository, appsRepository, articlesRepository, clinicsRepository, podcastsRepository, psychiatristsRepository, psychologistRepository, testsRepository) {
        this.disordersRepository = disordersRepository;
        this.advicesRepository = advicesRepository;
        this.appsRepository = appsRepository;
        this.articlesRepository = articlesRepository;
        this.clinicsRepository = clinicsRepository;
        this.podcastsRepository = podcastsRepository;
        this.psychiatristsRepository = psychiatristsRepository;
        this.psychologistRepository = psychologistRepository;
        this.testsRepository = testsRepository;
    }
    findDisorders() {
        return this.disordersRepository.find({ relations: ['advices', 'tests', 'articles', 'podcasts', 'clinics', 'apps', 'advices', 'psychiatrists', 'psychologists'
            ] });
    }
    createDisorders(disordersDetalis) {
        const newDisorders = this.disordersRepository.create(Object.assign({}, disordersDetalis));
        return this.disordersRepository.save(newDisorders);
    }
    updateDisorders(id_disorder, updateDisordersDetalis) {
        return this.disordersRepository.update({ id_disorder }, Object.assign({}, updateDisordersDetalis));
    }
    async CreateAdvices(id_disorder, createDisoderDetalis) {
        const disoders = await this.disordersRepository.findOneBy({ id_disorder });
        if (!disoders)
            throw new common_2.HttpException('disoder not found', common_2.HttpStatus.BAD_REQUEST);
        const newAdvice = this.advicesRepository.create(createDisoderDetalis);
        const saveAdvice = await this.advicesRepository.save(newAdvice);
        disoders.advices = [saveAdvice];
        return this.disordersRepository.save(disoders);
    }
    async CreateApps(id_disorder, createDisoderDetalis) {
        const disoders = await this.disordersRepository.findOneBy({ id_disorder });
        if (!disoders)
            throw new common_2.HttpException('disoder not found', common_2.HttpStatus.BAD_REQUEST);
        const newApp = this.appsRepository.create(createDisoderDetalis);
        const saveApp = await this.appsRepository.save(newApp);
        disoders.apps = [saveApp];
        return this.disordersRepository.save(disoders);
    }
    async CreateArticles(id_disorder, createDisoderDetalis) {
        const disoders = await this.disordersRepository.findOneBy({ id_disorder });
        if (!disoders)
            throw new common_2.HttpException('disoder not found', common_2.HttpStatus.BAD_REQUEST);
        const newArticle = this.articlesRepository.create(createDisoderDetalis);
        const saveArticle = await this.articlesRepository.save(newArticle);
        disoders.articles = saveArticle;
        return this.disordersRepository.save(disoders);
    }
    async CreateClinics(id_disorder, createDisoderDetalis) {
        const disoders = await this.disordersRepository.findOneBy({ id_disorder });
        if (!disoders)
            throw new common_2.HttpException('disoder not found', common_2.HttpStatus.BAD_REQUEST);
        const newClinic = this.clinicsRepository.create(createDisoderDetalis);
        const saveClinic = await this.clinicsRepository.save(newClinic);
        disoders.clinics = [saveClinic];
        return this.disordersRepository.save(disoders);
    }
    async CreatePodcasts(id_disorder, createDisoderDetalis) {
        const disoders = await this.disordersRepository.findOneBy({ id_disorder });
        if (!disoders)
            throw new common_2.HttpException('disoder not found', common_2.HttpStatus.BAD_REQUEST);
        const newPodcast = this.podcastsRepository.create(createDisoderDetalis);
        const savePodcast = await this.podcastsRepository.save(newPodcast);
        disoders.podcasts = savePodcast;
        return this.disordersRepository.save(disoders);
    }
    async CreatePsychiatrists(id_disorder, createDisoderDetalis) {
        const disoders = await this.disordersRepository.findOneBy({ id_disorder });
        if (!disoders)
            throw new common_2.HttpException('disoder not found', common_2.HttpStatus.BAD_REQUEST);
        const newPsychiatrist = this.psychiatristsRepository.create(createDisoderDetalis);
        const savePsychiatrist = await this.psychiatristsRepository.save(newPsychiatrist);
        disoders.psychiatrists = [savePsychiatrist];
        return this.disordersRepository.save(disoders);
    }
    async CreatePsychologist(id_disorder, createDisoderDetalis) {
        const disoders = await this.disordersRepository.findOneBy({ id_disorder });
        if (!disoders)
            throw new common_2.HttpException('disoder not found', common_2.HttpStatus.BAD_REQUEST);
        const newPsychologist = this.psychologistRepository.create(createDisoderDetalis);
        const savePsychologist = await this.psychologistRepository.save(newPsychologist);
        disoders.psychologists = [savePsychologist];
        return this.disordersRepository.save(disoders);
    }
    async CreateTests(id_disorder, createDisoderDetalis) {
        const disoders = await this.disordersRepository.findOneBy({ id_disorder });
        if (!disoders)
            throw new common_2.HttpException('disoder not found', common_2.HttpStatus.BAD_REQUEST);
        const newTests = this.testsRepository.create(createDisoderDetalis);
        const saveTests = await this.testsRepository.save(newTests);
        disoders.tests = saveTests;
        return this.disordersRepository.save(disoders);
    }
};
DisordersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(disorders_entity_1.Disorders)),
    __param(1, (0, typeorm_1.InjectRepository)(advices_entity_1.Advices)),
    __param(2, (0, typeorm_1.InjectRepository)(apps_entity_1.Apps)),
    __param(3, (0, typeorm_1.InjectRepository)(articles_entity_1.Articles)),
    __param(4, (0, typeorm_1.InjectRepository)(clinics_entity_1.Clinics)),
    __param(5, (0, typeorm_1.InjectRepository)(podcasts_entity_1.Podcasts)),
    __param(6, (0, typeorm_1.InjectRepository)(psychiatrists_entity_1.Psychiatrists)),
    __param(7, (0, typeorm_1.InjectRepository)(psychologist_entity_1.Psychologist)),
    __param(8, (0, typeorm_1.InjectRepository)(tests_entity_1.Tests)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], DisordersService);
exports.DisordersService = DisordersService;
//# sourceMappingURL=disorders.service.js.map