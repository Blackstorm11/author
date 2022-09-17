import { PartialType } from '@nestjs/mapped-types';
import { CreateAuthorDto } from './create-author.dto';

export class UpdateAuthorDto extends PartialType(CreateAuthorDto) {
    __v:string;
    AName:string;
    likes:number;
    dislike:number;
    quote:string;
    isActive:boolean;
    tags:string;
}
