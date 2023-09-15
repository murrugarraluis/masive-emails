import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Newsletter } from './entities/newsletter.entity';
import { InjectRepository } from '@nestjs/typeorm';
@Injectable()
export class NewslettersService {
  constructor(
    @InjectRepository(Newsletter)
    private readonly newsletterRepository: Repository<Newsletter>,
  ) {}
  async getOne(id: string) {
    const newsletter = await this.newsletterRepository.findOneBy({ id: +id });
    if (!newsletter) throw new NotFoundException('Newsletter Not Found');
    return newsletter;
  }
}
