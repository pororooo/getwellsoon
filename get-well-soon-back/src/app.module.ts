import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Disorders } from './entity/disorders.entity';
import { DisordersModule } from './disorders/disorders.module';
import { Advices } from './entity/advices.entity';
import { Apps } from './entity/apps.entity';
import { Articles } from './entity/articles.entity';
import { Clinics } from './entity/clinics.entity';
import { Podcasts } from './entity/podcasts.entity';
import { Psychiatrists } from './entity/psychiatrists.entity';
import { Psychologist } from './entity/psychologist.entity';
import { Tests } from './entity/tests.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3307,
      username: 'root',
      password: '',
      database: 'psycho',
      entities: [Disorders, Advices, Apps, Articles, Clinics, Podcasts, Psychiatrists, Psychologist, Tests],
      synchronize: true,
    }),
    DisordersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
