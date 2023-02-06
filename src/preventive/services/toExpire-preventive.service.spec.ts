import { Test, TestingModule } from '@nestjs/testing';
import { ToExpirePreventiveService } from './toExpire-preventive.service';

describe('ToExpirePreventiveService', () => {
  let service: ToExpirePreventiveService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ToExpirePreventiveService],
    }).compile();

    service = module.get<ToExpirePreventiveService>(ToExpirePreventiveService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});