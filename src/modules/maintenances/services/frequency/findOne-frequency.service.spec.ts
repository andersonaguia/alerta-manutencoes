import { Test, TestingModule } from '@nestjs/testing';
import { FindOneFrequencyService } from './findOne-frequency.service';

describe('FindOneFrequencyService', () => {
  let service: FindOneFrequencyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FindOneFrequencyService],
    }).compile();

    service = module.get<FindOneFrequencyService>(FindOneFrequencyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});