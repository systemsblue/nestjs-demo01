import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { typeormConfig } from './config/typeorm.config';

import { DemousersModule } from './demousers/demousers.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeormConfig),
    DemousersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
