import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
  Patch,
} from "@nestjs/common";
import { BookService } from "./book.service";
import { MessagePattern } from "@nestjs/microservices";

@Controller("books")
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @MessagePattern("findAllBook")
  @Get()
  findAll() {
    return this.bookService.findAll();
  }

  @MessagePattern("findOneBook")
  @Get(":id")
  findOne(@Param("id") id: number) {
    return this.bookService.findOne(id);
  }

  @MessagePattern("createBook")
  @Post()
  create(@Body() body: { name: string }) {
    return this.bookService.create(body);
  }

  @MessagePattern("updateBook")
  @Patch(":id")
  update(@Param("id") id: number, @Body() body: { name: string }) {
    return this.bookService.update(id, body);
  }

  @MessagePattern("deleteBook")
  @Delete(":id")
  delete(@Param("id") id: number) {
    return this.bookService.delete(id);
  }
}
