import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Apps {
  @PrimaryGeneratedColumn()
  id_app: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  link: string;
}