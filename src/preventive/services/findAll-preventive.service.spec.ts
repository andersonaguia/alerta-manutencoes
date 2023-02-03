import { Test, TestingModule } from '@nestjs/testing';
import { FindAllPreventiveService } from './findAll-preventive.service';

describe('FindAllPreventiveService', () => {
  let service: FindAllPreventiveService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FindAllPreventiveService],
    }).compile();

    service = module.get<FindAllPreventiveService>(FindAllPreventiveService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});