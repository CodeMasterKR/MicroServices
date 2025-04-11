import { Inject, Injectable } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";

@Injectable()
export class BookService {
  constructor(@Inject("BOOK_SERVICE") private client: ClientProxy) {}
  findAll() {
    return this.client.send("findAllBook", {});
  }
  findOnebook(id: number) {
    return this.client.send("findOneBook", id);
  }
  createbook(book: { name: string }) {
    return this.client.send("createBook", book);
  }
  updatebook(id: number, book: { name: string }) {
    return this.client.send("updateBook", { id, ...book });
  }
  deletebook(id: number) {
    return this.client.send("deletBook", id);
  }
}
