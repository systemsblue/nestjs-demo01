import { Test, TestingModule } from '@nestjs/testing';
import { DemousersService } from './demousers.service';

describe('DemousersService', () => {
  let service: DemousersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      //providers: [DemousersService],
      providers: [
        {
          provide: DemousersService,
          useValue: {
          }
        }
      ]
    }).compile();

    service = module.get<DemousersService>(DemousersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
