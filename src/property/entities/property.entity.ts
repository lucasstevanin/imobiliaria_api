import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

export enum PropertyType {
  HOME = 'HOME',
  APARTMENT = 'APARTMENT',
  KITNET = 'KITNET',
}

@Entity()
export class Property {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  address: string;

  @Column('decimal')
  price: number;

  @Column({
    type: 'text',
  })
  type: PropertyType;

  @CreateDateColumn()
  createdAt: Date;
}
