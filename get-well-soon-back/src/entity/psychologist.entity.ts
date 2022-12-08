import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Psychologist {
  @PrimaryGeneratedColumn()
  id_psychologist: number;

  @Column()
  name: string;

  @Column()
  link: string;

}