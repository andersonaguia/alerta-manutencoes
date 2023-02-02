import { Test, TestingModule } from '@nestjs/testing';
import { CreateResponsibleService } from './create-responsible.service';

describe('CreateResponsibleService', () => {
  let service: CreateResponsibleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreateResponsibleService],
    }).compile();

    service = module.get<CreateResponsibleService>(CreateResponsibleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
