import { Controller, Get,Post, Delete,Put, Body, Request, Param, NotFoundException,Header } from '@nestjs/common';

import { TodosService } from './todos.service';
import { TodosDto } from './dto/todos.dto';
import { Todos as TodosEntity } from './todos.entity';

@Controller('todos')
export class TodosController {
    constructor(private readonly todosService: TodosService) { }

    @Get()
    @Header('Access-Control-Allow-Origin', '*')
    async findAll() {
        // get all todos in the db
        return await this.todosService.findAll();
    }

    @Get(':id')
    @Header('Access-Control-Allow-Origin', '*')
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

    @Put(':id')
    @Header('Access-Control-Allow-Origin', '*')
    async update(@Param('id') id: number, @Body() todos: TodosDto): Promise<TodosEntity> {
        // get the number of row affected and the updated todo
        const { numberOfAffectedRows, updatedPost } = await this.todosService.update(id, todos);

        // if the number of row affected is zero, it means the todo doesn't exist in our db
        if (numberOfAffectedRows === 0) {
            throw new NotFoundException('This Post doesn\'t exist');
        }

        // return the updated post
        return updatedPost;
    }

    @Delete(':id')
    @Header('Access-Control-Allow-Origin', '*')
    @Header('Access-Control-Allow-Methods', 'DELETE')
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
    @Header('Access-Control-Allow-Origin', '*')
    async create(@Body() todos: TodosDto): Promise<TodosEntity> {
        // create a new todo item and return the newly created post
        return await this.todosService.create(todos);
    }
}
