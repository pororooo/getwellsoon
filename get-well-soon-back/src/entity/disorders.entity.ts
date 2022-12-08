import { Entity, Column, OneToMany, OneToOne, ManyToMany, ManyToOne, PrimaryGeneratedColumn, JoinColumn, JoinTable } from 'typeorm';
import { Advices } from './advices.entity';
import { Apps } from './apps.entity';
import { Articles } from './articles.entity';
import { Clinics } from './clinics.entity';
import { Podcasts } from './podcasts.entity';
import { Psychiatrists } from './psychiatrists.entity';
import { Psychologist } from './psychologist.entity';
import { Tests } from './tests.entity';

@Entity()
export class Disorders {
  @PrimaryGeneratedColumn()
  id_disorder: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  link: string;

  @ManyToMany(() => Advices) 
  @JoinTable()
  advices: Advices[];

  @ManyToOne(() => Apps)
  @JoinColumn()
  apps: Apps[];

  @OneToOne(() => Articles) 
  @JoinColumn()
  articles: Articles;

  @ManyToOne(() => Clinics) 
  @JoinColumn()
  clinics: Clinics[];

  @OneToOne(() => Podcasts) 
  @JoinColumn()
  podcasts: Podcasts;

  @ManyToOne(() => Psychiatrists) 
  @JoinColumn()
  psychiatrists: Psychiatrists[];

  @ManyToOne(() => Psychologist) 
  @JoinColumn()
  psychologists: Psychologist[];

  @OneToOne(() => Tests) 
  @JoinColumn()
  tests: Tests;
 
}