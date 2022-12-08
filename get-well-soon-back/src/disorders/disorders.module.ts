import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Advices } from 'src/entity/advices.entity';
import { Disorders } from 'src/entity/disorders.entity';
import { DisordersController } from './disorders.controller';
import { DisordersService } from './disorders.service';
import { Apps } from 'src/entity/apps.entity';
import { Articles } from 'src/entity/articles.entity';
import { Clinics } from 'src/entity/clinics.entity';
import { Podcasts } from 'src/entity/podcasts.entity';
import { Psychiatrists } from 'src/entity/psychiatrists.entity';
import { Psychologist } from 'src/entity/psychologist.entity';
import { Tests } from 'src/entity/tests.entity';



@Module({
  imports:[TypeOrmModule.forFeature([Disorders, Advices, Apps, Articles, Clinics, Podcasts, Psychiatrists, Psychologist, Tests])],
  controllers: [DisordersController],
  providers: [DisordersService]
})
export class DisordersModule {}
