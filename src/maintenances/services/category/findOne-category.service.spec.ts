import { Test, TestingModule } from '@nestjs/testing';
import { CreateCategoryService } from './create-category.service';
import { FindOneCategoryService } from './findOne-category.service';

describe('FindOneCategoryService', () => {
  let service: FindOneCategoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FindOneCategoryService],
    }).compile();

    service = module.get<FindOneCategoryService>(FindOneCategoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});