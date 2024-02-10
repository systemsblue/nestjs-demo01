import { Test, TestingModule } from '@nestjs/testing';
import { DemousersController } from './demousers.controller';
import { DemousersService } from './demousers.service';

describe('DemousersController', () => {
  let controller: DemousersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DemousersController],
      //providers: [DemousersService],
      providers: [
        {
          provide: DemousersService,
          useValue: {
          }
        }
      ],
    }).compile();

    controller = module.get<DemousersController>(DemousersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
