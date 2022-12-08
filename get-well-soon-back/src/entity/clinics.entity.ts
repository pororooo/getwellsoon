import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Clinics {
  @PrimaryGeneratedColumn()
  id_clinic: number;

  @Column()
  name: string;

  @Column()
  link: string;
}