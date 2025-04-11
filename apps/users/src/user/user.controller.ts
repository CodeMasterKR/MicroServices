import { Controller } from "@nestjs/common";
import { MessagePattern, Payload } from "@nestjs/microservices";
import { UserService } from "./user.service";

@Controller("user")
export class UserController {
  constructor(private readonly service: UserService) {}
  @MessagePattern("findAllUser")
  findAll() {
    return this.service.findAll();
  }

  @MessagePattern("findOneUser")
  findOne(@Payload() id: number) {
    return this.service.findOne(id);
  }

  @MessagePattern("createUser")
  create(@Payload() payload: { name: string; age: number }) {
    return this.service.create(payload);
  }

  @MessagePattern("updateUser")
  update(@Payload() data: { id: number; name: string; age: number }) {
    return this.service.update(data.id, { name: data.name, age: data.age });
  }
  
  @MessagePattern("deleteUser")
  delete(@Payload() id: number) {
    return this.service.delete(id);
  }
}
