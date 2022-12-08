import { CreateDisordersDto } from 'src/dto/createDisorder.dto';
import { UpdateDisordersDto } from 'src/dto/updateDisorders.dto';
import { DisordersService } from './disorders.service';
import { CreateAdvicesDto } from 'src/dto/createAdvices.dto';
import { CreateAppsDto } from 'src/dto/createApps.dto';
import { CreateArticlesDto } from 'src/dto/createArticles.dto';
import { CreateClinicsDto } from 'src/dto/createClinics.dto';
import { CreatePodcastsDto } from 'src/dto/createPodcasts.dto';
import { CreatePsychiatristsDto } from 'src/dto/createPsychiatrists.dto';
import { CreatePsychologistDto } from 'src/dto/createPsychologist.dto';
import { CreateTestsDto } from 'src/dto/createTests.dto';
export declare class DisordersController {
    private disordersService;
    constructor(disordersService: DisordersService);
    getDisorders(): Promise<import("../entity/disorders.entity").Disorders[]>;
    createDisorders(createDisordersDto: CreateDisordersDto): Promise<import("../entity/disorders.entity").Disorders>;
    updateDisordersById(id: number, updateDisordersDto: UpdateDisordersDto): Promise<void>;
    CreateAdvices(id: number, createAdvicesDto: CreateAdvicesDto): Promise<import("../entity/disorders.entity").Disorders>;
    CreateApps(id: number, createAppsDto: CreateAppsDto): Promise<import("../entity/disorders.entity").Disorders>;
    CreateArticles(id: number, createArticlesDto: CreateArticlesDto): Promise<import("../entity/disorders.entity").Disorders>;
    CreateClinics(id: number, createClinicsDto: CreateClinicsDto): Promise<import("../entity/disorders.entity").Disorders>;
    CreatePodcasts(id: number, createPodcastsDto: CreatePodcastsDto): Promise<import("../entity/disorders.entity").Disorders>;
    CreatePsychiatrists(id: number, createPsychiatristsDto: CreatePsychiatristsDto): Promise<import("../entity/disorders.entity").Disorders>;
    CreatePsychologist(id: number, createPsychologistDto: CreatePsychologistDto): Promise<import("../entity/disorders.entity").Disorders>;
    CreateTests(id: number, createTestsDto: CreateTestsDto): Promise<import("../entity/disorders.entity").Disorders>;
}
