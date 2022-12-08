import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Tests {
  @PrimaryGeneratedColumn()
  id_test: number;

  @Column()
  question1: string;

  @Column()
  question2: string;

  @Column()
  question3: string;

  @Column()
  question4: string;

  @Column()
  question5: string;

  @Column()
  question6: string;

  @Column()
  question7: string;

  @Column()
  question8: string;

  @Column()
  question9: string;

  @Column()
  question10: string;
}