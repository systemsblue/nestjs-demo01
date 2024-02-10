import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;
  let appService: AppService; // add

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      //providers: [AppService],
      providers:[
        AppService,
        {
          provide: "AppService",
          useValue: {
            getHello: jest.fn().mockReturnValue('Hello Mock!'),
          }
        }
      ]
    }).compile();

    appController = app.get<AppController>(AppController);
    appService = app.get<AppService>("AppService"); //add

  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });

  describe('mock', () => {
    it('shuld return "Hello Mock!"', () => {
      const controller = new AppController(appService);
      expect(controller.getHello()).toBe('Hello Mock!');
    })
  })

  describe('spyon', () => {
    it('shuld return "Hello SpyOn!"', () => {
      const controller = new AppController(appService);
      jest.spyOn(appService, 'getHello').mockReturnValue('Hello SpyOn!')
      expect(controller.getHello()).toBe('Hello SpyOn!');
    })
  }) 
});
// npm test src/app.controller.spec.ts
