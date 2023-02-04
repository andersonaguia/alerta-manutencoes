import { Test, TestingModule } from '@nestjs/testing';
import { FindAllMailService } from './findAll-mail.service';

describe('FindAllMailService', () => {
  let service: FindAllMailService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FindAllMailService],
    }).compile();

    service = module.get<FindAllMailService>(FindAllMailService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});