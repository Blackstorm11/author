import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthorModule } from './author/author.module';

@Module({
  imports: [AuthorModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5400,
      username: 'dev-user',
      password: 'dev-user',
      database: 'quotes-app',
      synchronize: true,
      entities:[__dirname + '/**/*.entity{.ts,.js}']
    }),
],
  
})
export class AppModule {}
