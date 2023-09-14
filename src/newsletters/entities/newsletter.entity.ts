import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { UserNewsletter } from '../../users/entities/user-newsletter.entity';

@Entity('newsletters')
export class Newsletter {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  title: string;
  @OneToMany(() => UserNewsletter, (userNewsletters) => userNewsletters.user)
  userNewsletters: UserNewsletter[];
}
