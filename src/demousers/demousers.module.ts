import { Module } from '@nestjs/common';
import { DemousersService } from './demousers.service';
import { DemousersController } from './demousers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Demouser } from './entities/demouser.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Demouser])],
  controllers: [DemousersController],
  providers: [DemousersService],
})
export class DemousersModule {}
