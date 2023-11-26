import { Test, TestingModule } from '@nestjs/testing';
import { AlienService } from './alien.service';

describe('AlienService', () => {
  let service: AlienService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AlienService],
    }).compile();

    service = module.get<AlienService>(AlienService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
