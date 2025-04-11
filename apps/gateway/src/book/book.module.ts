import { Module } from '@nestjs/common';
import { BookService } from './book.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import {BookController} from './book.controller'

@Module({
   imports: [
      ClientsModule.register([
        {
          name: 'BOOK_SERVICE',
          transport: Transport.TCP,
          options: {
            port: 4001,
          },
        },
      ]),
    ],
  controllers: [BookController],
  providers: [BookService],
})
export class BookModule {}
