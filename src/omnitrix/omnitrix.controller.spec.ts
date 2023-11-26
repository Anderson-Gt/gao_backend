import { Test, TestingModule } from '@nestjs/testing';
import { OmnitrixController } from './omnitrix.controller';
import { OmnitrixService } from './omnitrix.service';

describe('OmnitrixController', () => {
  let controller: OmnitrixController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OmnitrixController],
      providers: [OmnitrixService],
    }).compile();

    controller = module.get<OmnitrixController>(OmnitrixController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
