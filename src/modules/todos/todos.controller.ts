import { Controller, Get,Post, Delete, Body, Request, Param, NotFoundException } from '@nestjs/common';

import { TodosService } from './todos.service';
import { TodosDto } from './dto/todos.dto';
import { Todos as TodosEntity } from './todos.entity';

@Controller('todos')
export class TodosController {
    constructor(private readonly todosService: TodosService) { }

    @Get()
    async findAll() {
        // get all todos in the db
        return await this.todosService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: number): Promise<TodosEntity> {
        // find the todo with this id
        const todo = await this.todosService.findOne(id);

        // if the todo doesn't exit in the db, throw a 404 error
        if (!todo) {
            throw new NotFoundException('This Post doesn\'t exist');
        }

        // if post exist, return the post
        return todo;
    }

    @Delete(':id')
    async remove(@Param('id') id: number, @Request() req) {
        // delete the todos with this id
        const deleted = await this.todosService.delete(id);

        // if the number of row affected is zero, then the todo doesn't exist in our db
        if (deleted === 0) {
            throw new NotFoundException('This Post doesn\'t exist');
        }

        // return success message
        return 'Successfully deleted';
    }

    @Post()
    async create(@Body() todos: TodosDto, @Request() req): Promise<TodosEntity> {
        // create a new todo item and return the newly created post
        return await this.todosService.create(todos);
    }
}
