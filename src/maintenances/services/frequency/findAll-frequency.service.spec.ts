import { Test, TestingModule } from '@nestjs/testing';
import { FindAllFrequencyService } from './findAll-frequency.service';

describe('FindAllFrequencyService', () => {
  let service: FindAllFrequencyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FindAllFrequencyService],
    }).compile();

    service = module.get<FindAllFrequencyService>(FindAllFrequencyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});