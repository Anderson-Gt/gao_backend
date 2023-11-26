import { Test, TestingModule } from '@nestjs/testing';
import { AlienController } from './alien.controller';
import { AlienService } from './alien.service';

describe('AlienController', () => {
  let controller: AlienController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AlienController],
      providers: [AlienService],
    }).compile();

    controller = module.get<AlienController>(AlienController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
