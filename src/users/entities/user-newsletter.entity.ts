import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';
import { Newsletter } from '../../newsletters/entities/newsletter.entity';
@Entity('users_newsletters')
export class UserNewsletter {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: false })
  sendEmail: boolean;

  @ManyToOne(() => User, (user) => user.userNewsletters)
  user: User;

  @ManyToOne(() => Newsletter, (newsletter) => newsletter.userNewsletters)
  newsletter: Newsletter;
}
