import { Test, TestingModule } from '@nestjs/testing';
import { CreateCategoryService } from './create-category.service';
import { FindAllCategoryService } from './findAll-category.service';

describe('FindAllCategoryService', () => {
  let service: FindAllCategoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FindAllCategoryService],
    }).compile();

    service = module.get<FindAllCategoryService>(FindAllCategoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});