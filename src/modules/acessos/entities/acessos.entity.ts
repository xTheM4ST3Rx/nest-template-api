import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Acesso {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @Column({ length: 100 })
  email: string;
}
