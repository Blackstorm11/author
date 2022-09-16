import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { Author } from './entities/author.entity';

@Injectable()
export class AuthorService {
  constructor(@InjectRepository(Author) private readonly authorRepository: Repository<Author>){

  }
  create(createAuthorDto: CreateAuthorDto) {
    let author:Author= new Author();
    author.__=createAuthorDto.__;
    author.AName=createAuthorDto.AName;
    author.dislike=createAuthorDto.dislike;
    author.likes=createAuthorDto.likes;
    author.quotes=createAuthorDto.quotes;
    author.isActive=createAuthorDto.isActive;
    return this.authorRepository.save(author);
  }

  findAll() {
    return this.authorRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} author`;
  }

  update(id: number, updateAuthorDto: UpdateAuthorDto) {
    return `This action updates a #${id} author`;
  }

  remove(id: number) {
    return this.authorRepository.delete(id);
  }
}
