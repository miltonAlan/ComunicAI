import { Controller, Get, Post, Body, Param, Put, Delete, NotFoundException } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get()
    findAll(): Promise<User[]> {
        return this.usersService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<User> {
        return this.usersService.findOne(+id);
    }

    @Post()
    create(@Body() user: User): Promise<User> {
        return this.usersService.create(user);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() user: User): Promise<User> {
        user.id = +id;
        return this.usersService.update(user);
    }

    @Delete(':id')
    remove(@Param('id') id: string): Promise<void> {
        return this.usersService.remove(+id);
    }

    @Post('login')
    async findByUsernameAndPassword(@Body() credentials: { username: string, password: string }): Promise<User | { message: string }> {
      const user = await this.usersService.findByUsernameAndPassword(credentials.username, credentials.password);
      if (!user) {
        throw new NotFoundException('Usuario no encontrado');
      }
      return user;
    }
}
