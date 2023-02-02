import { Test, TestingModule } from '@nestjs/testing';
import { CreatePreventiveService } from './create-preventive.service';

describe('CreatePreventiveService', () => {
  let service: CreatePreventiveService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreatePreventiveService],
    }).compile();

    service = module.get<CreatePreventiveService>(CreatePreventiveService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
