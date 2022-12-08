import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Podcasts {
  @PrimaryGeneratedColumn()
  id_podcast: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  link: string;
}