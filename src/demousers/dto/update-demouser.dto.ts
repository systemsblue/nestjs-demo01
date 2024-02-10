import { PartialType } from '@nestjs/mapped-types';
import { CreateDemouserDto } from './create-demouser.dto';

export class UpdateDemouserDto extends PartialType(CreateDemouserDto) {
    id: string
    name: string
}
