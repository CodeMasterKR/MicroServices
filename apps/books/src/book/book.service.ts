import { Injectable, NotFoundException } from "@nestjs/common";

const books = [
  { id: 100, name: "Atomic Habits" },
  { id: 101, name: "Deep Work" },
  { id: 102, name: "Hadis va hayot" },
];

@Injectable()
export class BookService {
  findAll() {
    return { data: books };
  }
  findOne(id: number) {
    let book = books.find((i) => i.id == id);
    if (!book) {
      return { message: "Not found book with this id" };
    }
    return { data: book };
  }

  create(book: { name: string;}) {
    const newbook = {
      id: books.length + 1,
      ...book,
    };
    books.push(newbook);
    return { data: newbook };
  }

  update(id: number, book: { name: string; }) {
    const index = books.findIndex((i) => i.id == id);
    if (index == -1) {
      return { message: "Not found book with this id" };
    }
    books[index] = { ...books[index], ...book };
    return { data: books[index] };
  }

  delete(id: number) {
    const index = books.findIndex((i) => i.id == id);
    if (index == -1) {
      return { message: "Not found book with this id" };
    }
    books.splice(index, 1);
    return { message: "The book was deleted successfully!" };
  }
}
