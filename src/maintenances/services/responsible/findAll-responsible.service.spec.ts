import { Test, TestingModule } from '@nestjs/testing';
import { FindAllResponsibleService } from './findAll-responsible.service';

describe('FindAllResponsibleService', () => {
  let service: FindAllResponsibleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FindAllResponsibleService],
    }).compile();

    service = module.get<FindAllResponsibleService>(FindAllResponsibleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
