import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { parse, resolve } from 'path';
import { Repository } from 'typeorm';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { Quotes } from './entities/author.entity';

@Injectable()
export class AuthorService {
  constructor(@InjectRepository(Quotes) private readonly authorRepository: Repository<Quotes>){

  }
  create(createAuthorDto: CreateAuthorDto) {
    let author:Quotes= new Quotes();
    author.__v=createAuthorDto.__v;
    author.AName=createAuthorDto.AName;
    author.dislike=createAuthorDto.dislike;
    author.likes=createAuthorDto.likes;
    author.quote=createAuthorDto.quote;
    author.isActive=createAuthorDto.isActive;
    author.tags=createAuthorDto.tags;
    return this.authorRepository.save(author);
  }

  findAll() {
    return this.authorRepository.find();
  }

  async findById(id: string):Promise<Quotes>{
    const author=await this.authorRepository.findOneBy({id:id});
    if (!author){
      const errors={author:'not found'}
            throw new HttpException({errors},404);
    }
    return author;
  }


  update(id: string, updateAuthorDto: UpdateAuthorDto) {
    let author:Quotes= new Quotes();
    author.__v=updateAuthorDto.__v;
    author.AName=updateAuthorDto.AName;
    author.dislike=updateAuthorDto.dislike;
    author.likes=updateAuthorDto.likes;
    author.quote=updateAuthorDto.quote;
    author.isActive=updateAuthorDto.isActive;
    author.tags=updateAuthorDto.tags;
    return this.authorRepository.save(author)
    
  }

  remove(id: string) {
    return this.authorRepository.delete(id);
  }


}
