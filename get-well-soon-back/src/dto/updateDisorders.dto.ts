import { PartialType } from '@nestjs/mapped-types';
import { CreateDisordersDto } from "./createDisorder.dto";


export class UpdateDisordersDto extends PartialType(CreateDisordersDto) { //1
    name: string;
    description: string;
    link: string;
}//types
