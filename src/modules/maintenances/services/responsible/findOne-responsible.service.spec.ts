import { Test, TestingModule } from '@nestjs/testing';
import { FindOneResponsibleService } from './findOne-responsible.service';

describe('FindOneResponsibleService', () => {
  let service: FindOneResponsibleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FindOneResponsibleService],
    }).compile();

    service = module.get<FindOneResponsibleService>(FindOneResponsibleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});