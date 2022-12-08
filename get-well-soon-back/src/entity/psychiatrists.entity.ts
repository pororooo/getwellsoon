import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Psychiatrists {
  @PrimaryGeneratedColumn()
  id_psychiatrist: number;

  @Column()
  name: string;

  @Column()
  link: string;

}