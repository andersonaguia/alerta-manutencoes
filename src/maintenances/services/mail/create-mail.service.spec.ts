import { Test, TestingModule } from '@nestjs/testing';
import { CreateMailService } from './create-mail.service';

describe('CreateMailService', () => {
  let service: CreateMailService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreateMailService],
    }).compile();

    service = module.get<CreateMailService>(CreateMailService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});