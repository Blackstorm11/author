import { Module } from '@nestjs/common';
import { AuthorService } from './author.service';
import { AuthorController } from './author.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Quotes } from './entities/author.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Quotes] )],
  controllers: [AuthorController],
  providers: [AuthorService]
})
export class AuthorModule {}
