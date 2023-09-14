import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { UserNewsletter } from './user-newsletter.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  email: string;
  @OneToMany(() => UserNewsletter, (userNewsletters) => userNewsletters.user)
  userNewsletters: UserNewsletter[];
}
