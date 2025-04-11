import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { BookService } from "./book.service";

@Controller("books")
export class BookController {
  constructor(private readonly service: BookService) {}
  @Get()
  findBooks() {
    return this.service.findAll();
  }
  @Get(":id")
  findOneBook(@Param("id") id: string) {
    return this.service.findOnebook(+id);
  }

  @Post()
  createBook(@Body() body: { name: string; }) {
    return this.service.createbook(body);
  }
  @Patch(":id")
  updateBook(
    @Param("id") id: string,
    @Body() body: { name: string }
  ) {
    return this.service.updatebook(+id, body);
  }
  
  @Delete(":id")
  deleteBook(@Param("id") id: string) {
    return this.service.deletebook(+id);
  }
}
