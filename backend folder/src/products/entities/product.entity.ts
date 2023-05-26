import { Entity, Column, ObjectIdColumn, ObjectId } from 'typeorm';

@Entity()
export class Product {
  @ObjectIdColumn()
  id: ObjectId;

  @Column()
  imageLink: string;

  @Column()
  name: string;

  @Column()
  price: number;
}
