import { Injectable } from '@nestjs/common';
import { UpdateDisordersDto } from 'src/dto/updateDisorders.dto';
import { CreateDisordersDto } from 'src/dto/createDisorder.dto';
import { Disorders } from 'src/entity/disorders.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAdvicesParams } from 'src/types';
import { CreateAppsParams } from 'src/types';
import { CreateArticlesParams } from 'src/types';
import { CreateClinicsParams } from 'src/types';
import { CreatePodcastsParams } from 'src/types';
import { CreatePsychiatristsParams } from 'src/types';
import { CreatePsychologistParams } from 'src/types';
import { CreateTestsParams } from 'src/types';
import { HttpException, HttpStatus } from '@nestjs/common';
import { Advices } from 'src/entity/advices.entity';
import { Apps } from 'src/entity/apps.entity';
import { Articles } from 'src/entity/articles.entity';
import { Clinics } from 'src/entity/clinics.entity';
import { Podcasts } from 'src/entity/podcasts.entity';
import { Psychiatrists } from 'src/entity/psychiatrists.entity';
import { Psychologist } from 'src/entity/psychologist.entity';
import { Tests } from 'src/entity/tests.entity';

@Injectable()
export class DisordersService {
    constructor(
        @InjectRepository(Disorders) private disordersRepository: Repository<Disorders>,
        @InjectRepository(Advices) private advicesRepository: Repository<Advices>,
        @InjectRepository(Apps) private appsRepository: Repository<Apps>,
        @InjectRepository(Articles) private articlesRepository: Repository<Articles>,
        @InjectRepository(Clinics) private clinicsRepository: Repository<Clinics>,
        @InjectRepository(Podcasts) private podcastsRepository: Repository<Podcasts>,
        @InjectRepository(Psychiatrists) private psychiatristsRepository: Repository<Psychiatrists>,
        @InjectRepository(Psychologist) private psychologistRepository: Repository<Psychologist>,
        @InjectRepository(Tests) private testsRepository: Repository<Tests>
    
      ) {}
    
    
      findDisorders() {
        return this.disordersRepository.find({ relations: [ 'advices', 'tests', 'articles', 'podcasts', 'clinics', 'apps', 'advices', 'psychiatrists', 'psychologists'
        ]});
      }
    
    
      createDisorders(disordersDetalis: CreateDisordersDto) {
        const newDisorders = this.disordersRepository.create({
          ...disordersDetalis,
        });
        return this.disordersRepository.save(newDisorders);
      }
    
      updateDisorders(id_disorder: number, updateDisordersDetalis: UpdateDisordersDto) {
        return this.disordersRepository.update({ id_disorder }, { ...updateDisordersDetalis });
      }
    
      async CreateAdvices(
        id_disorder:number,
        createDisoderDetalis: CreateAdvicesParams,
        ){
         const disoders = await this.disordersRepository.findOneBy({id_disorder})
         if(!disoders) throw new HttpException('disoder not found', HttpStatus.BAD_REQUEST,)
        
         const newAdvice = this.advicesRepository.create(createDisoderDetalis);
         const saveAdvice = await this.advicesRepository.save(newAdvice)
         disoders.advices = [saveAdvice];
         return this.disordersRepository.save(disoders);
         
        }

        async CreateApps(
          id_disorder:number,
          createDisoderDetalis: CreateAppsParams,
          ){
           const disoders = await this.disordersRepository.findOneBy({id_disorder})
           if(!disoders) throw new HttpException('disoder not found', HttpStatus.BAD_REQUEST,)
          
           const newApp = this.appsRepository.create(createDisoderDetalis);
           const saveApp = await this.appsRepository.save(newApp)
           disoders.apps = [saveApp];
           return this.disordersRepository.save(disoders);
           
          }

          async CreateArticles(
            id_disorder:number,
            createDisoderDetalis: CreateArticlesParams,
            ){
             const disoders = await this.disordersRepository.findOneBy({id_disorder})
             if(!disoders) throw new HttpException('disoder not found', HttpStatus.BAD_REQUEST,)
            
             const newArticle = this.articlesRepository.create(createDisoderDetalis);
             const saveArticle = await this.articlesRepository.save(newArticle)
             disoders.articles = saveArticle;
             return this.disordersRepository.save(disoders);
             
            }

            async CreateClinics(
              id_disorder:number,
              createDisoderDetalis: CreateClinicsParams,
              ){
               const disoders = await this.disordersRepository.findOneBy({id_disorder})
               if(!disoders) throw new HttpException('disoder not found', HttpStatus.BAD_REQUEST,)
              
               const newClinic = this.clinicsRepository.create(createDisoderDetalis);
               const saveClinic = await this.clinicsRepository.save(newClinic)
               disoders.clinics = [saveClinic];
               return this.disordersRepository.save(disoders);
               
              }

          async CreatePodcasts(
              id_disorder:number,
              createDisoderDetalis: CreatePodcastsParams,
              ){
               const disoders = await this.disordersRepository.findOneBy({id_disorder})
               if(!disoders) throw new HttpException('disoder not found', HttpStatus.BAD_REQUEST,)
              
               const newPodcast = this.podcastsRepository.create(createDisoderDetalis);
               const savePodcast = await this.podcastsRepository.save(newPodcast)
               disoders.podcasts = savePodcast;
               return this.disordersRepository.save(disoders);
               
              }

      async CreatePsychiatrists(
              id_disorder:number,
              createDisoderDetalis: CreatePsychiatristsParams,
              ){
               const disoders = await this.disordersRepository.findOneBy({id_disorder})
               if(!disoders) throw new HttpException('disoder not found', HttpStatus.BAD_REQUEST,)
              
               const newPsychiatrist = this.psychiatristsRepository.create(createDisoderDetalis);
               const savePsychiatrist = await this.psychiatristsRepository.save(newPsychiatrist)
               disoders.psychiatrists = [savePsychiatrist];
               return this.disordersRepository.save(disoders);
               
              }

        async CreatePsychologist(
              id_disorder:number,
              createDisoderDetalis: CreatePsychologistParams,
              ){
               const disoders = await this.disordersRepository.findOneBy({id_disorder})
               if(!disoders) throw new HttpException('disoder not found', HttpStatus.BAD_REQUEST,)
              
               const newPsychologist = this.psychologistRepository.create(createDisoderDetalis);
               const savePsychologist = await this.psychologistRepository.save(newPsychologist)
               disoders.psychologists = [savePsychologist];
               return this.disordersRepository.save(disoders);
               
              }

        async CreateTests(
              id_disorder:number,
              createDisoderDetalis: CreateTestsParams,
              ){
               const disoders = await this.disordersRepository.findOneBy({id_disorder})
               if(!disoders) throw new HttpException('disoder not found', HttpStatus.BAD_REQUEST,)
              
               const newTests = this.testsRepository.create(createDisoderDetalis);
               const saveTests = await this.testsRepository.save(newTests)
               disoders.tests = saveTests;
               return this.disordersRepository.save(disoders);
               
              }


    
}
