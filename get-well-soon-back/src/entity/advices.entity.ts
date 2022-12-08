import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Advices {
  @PrimaryGeneratedColumn()
  id_advice: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  link: string;
}