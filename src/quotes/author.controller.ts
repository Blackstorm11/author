import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { AuthorService } from './author.service';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';

@Controller('Quotes')
export class AuthorController {
  constructor(private readonly authorService: AuthorService) {}

  @Post()
  create(@Body() createAuthorDto: CreateAuthorDto) {
    return this.authorService.create(createAuthorDto);
  }

  @Get()
  findAll() {
    return this.authorService.findAll();
  }

  @Get(':_id')
  findById(@Param('_id') _id: string) {
    return this.authorService.findById(_id);
  }

  @Patch(':_id')
  update(@Param('_id') _id: string, @Body() updateAuthorDto: UpdateAuthorDto) {
    return this.authorService.update(_id, updateAuthorDto);
  }

  @Delete(':_id')
  remove(@Param('_id') _id: string) {
    return this.authorService.remove(_id);
  }
}
