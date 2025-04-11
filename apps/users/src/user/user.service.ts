import { Injectable, NotFoundException } from "@nestjs/common";

const users = [
  { id: 1, name: "James Clear", age: 23 },
  { id: 2, name: "Abdulla Avloniy", age: 23 },
  { id: 3, name: "G'azzoliy", age: 23 },
];

@Injectable()
export class UserService {
  findAll() {
    return { data: users };
  }
  findOne(id: number) {
    let user = users.find((i) => i.id == id);
    if (!user) {
      return { message: "Not found user with this id!" };
    }
    return { data: user };
  }

  create(user: { name: string; age: number }) {
    const newUser = {
      id: users.length + 1,
      ...user,
    };
    users.push(newUser);
    return { data: newUser };
  }

  update(id: number, user: { name: string; age: number }) {
    const index = users.findIndex((i) => i.id == id);
    if (index == -1) {
      return { message: "Not found user with this id!" };
    }
    users[index] = { ...users[index], ...user };
    return { data: users[index] };
  }

  delete(id: number) {
    const index = users.findIndex((i) => i.id == id);
    if (index == -1) {
      return { message: "Not found user with this id!" };
    }
    users.splice(index, 1);
    return { message: "User was deleted successfully!" };
  }
}
