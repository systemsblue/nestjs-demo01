import { Injectable } from '@nestjs/common';
import { CreateDemouserDto } from './dto/create-demouser.dto';
import { UpdateDemouserDto } from './dto/update-demouser.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Demouser } from './entities/demouser.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DemousersService {
  constructor(
    @InjectRepository(Demouser)
    private readonly usersRepository: Repository<Demouser>,
  ) {}

  create(createDemouserDto: CreateDemouserDto) {
    return this.usersRepository.save(createDemouserDto)
  }

  findAll() {
    return this.usersRepository.find() 
  }

  findOne(id: string) {
    return this.usersRepository.findOneBy({ id: id })
  }

  update(id: string, updateDemouserDto: UpdateDemouserDto) {
    updateDemouserDto.id = id
    return this.usersRepository.save(updateDemouserDto)
  }

  remove(demoUser: Demouser) {
    return this.usersRepository.remove([demoUser])
  }
}
