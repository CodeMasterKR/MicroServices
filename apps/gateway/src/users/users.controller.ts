import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { UsersService } from "./users.service";

@Controller("users")
export class UsersController {
  constructor(private readonly service: UsersService) {}
  @Get()
  findUsers() {
    return this.service.findAll();
  }
  @Get(":id")
  findOneUser(@Param("id") id: string) {
    return this.service.findOneUser(+id);
  }

  @Post()
  createUser(@Body() body: { name: string; age: number }) {
    return this.service.createUser(body);
  }
  @Patch(":id")
  updateUser(
    @Param("id") id: string,
    @Body() body: { name: string; age: number }
  ) {
    return this.service.updateUser(+id, body);
  }
  
  @Delete(":id")
  deleteUser(@Param("id") id: string) {
    return this.service.deleteUser(+id);
  }
}
