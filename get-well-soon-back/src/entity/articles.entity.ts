import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Articles {
  @PrimaryGeneratedColumn()
  id_article: number;

  @Column()
  name: string;

  @Column()
  link: string;
}