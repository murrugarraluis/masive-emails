import { Controller, Get } from '@nestjs/common';
import { FakerService } from './faker.service';

@Controller('faker')
export class FakerController {
  constructor(private readonly fakerService: FakerService) {}
  @Get('seed')
  async seed() {
    await this.fakerService.seedData();
    return 'Seed Ok! 🚀';
  }
}
