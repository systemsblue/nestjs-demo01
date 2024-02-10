import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DemousersService } from './demousers.service';
import { CreateDemouserDto } from './dto/create-demouser.dto';
import { UpdateDemouserDto } from './dto/update-demouser.dto';

@Controller('demousers')
export class DemousersController {
  constructor(private readonly demousersService: DemousersService) {}

  @Post()
  create(@Body() createDemouserDto: CreateDemouserDto) {
    return this.demousersService.create(createDemouserDto);
  }

  @Get()
  findAll() {
    return this.demousersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.demousersService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDemouserDto: UpdateDemouserDto) {
    return this.demousersService.update(id, updateDemouserDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const user = this.demousersService.findOne(id)
    let u = await user
    return this.demousersService.remove(u)
  }
}
