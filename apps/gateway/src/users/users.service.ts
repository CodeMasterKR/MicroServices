import { Inject, Injectable } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";

@Injectable()
export class UsersService {
  constructor(@Inject("USER_SERVICE") private client: ClientProxy) {}
  findAll() {
    return this.client.send("findAllUser", {});
  }
  findOneUser(id: number) {
    return this.client.send("findOneUser", id);
  }
  createUser(user: { name: string; age: number }) {
    return this.client.send("createUser", user);
  }
  updateUser(id: number, user: { name: string; age: number }) {
    return this.client.send("updateUser", { id, ...user });
  }
  deleteUser(id: number) {
    return this.client.send("deleteUser", id);
  }
}
