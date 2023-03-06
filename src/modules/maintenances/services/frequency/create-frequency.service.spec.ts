import { Test, TestingModule } from '@nestjs/testing';
import { CreateFrequencyService } from './create-frequency.service';

describe('CreateFrequencyService', () => {
  let service: CreateFrequencyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreateFrequencyService],
    }).compile();

    service = module.get<CreateFrequencyService>(CreateFrequencyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
