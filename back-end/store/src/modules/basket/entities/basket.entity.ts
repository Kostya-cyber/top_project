import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'baskets' })
export class Basket {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'integer',
    name: 'recipe_id',
    nullable: false,
  })
  recipeId: number;

  @Column({
    type: 'integer',
    name: 'user_id',
    nullable: false,
  })
  userId: number;
}
