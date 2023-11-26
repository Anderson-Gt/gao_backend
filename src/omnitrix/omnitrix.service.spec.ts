import { Test, TestingModule } from '@nestjs/testing';
import { OmnitrixService } from './omnitrix.service';

describe('OmnitrixService', () => {
  let service: OmnitrixService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OmnitrixService],
    }).compile();

    service = module.get<OmnitrixService>(OmnitrixService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
