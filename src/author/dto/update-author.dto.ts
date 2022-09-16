import { PartialType } from '@nestjs/mapped-types';
import { CreateAuthorDto } from './create-author.dto';

export class UpdateAuthorDto extends PartialType(CreateAuthorDto) {
    __:string;
    AName:string;
    likes:number;
    dislike:number;
    quotes:string;
    isActive:boolean;
}
