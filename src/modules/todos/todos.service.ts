import { Injectable, Inject } from '@nestjs/common';

import { Todos } from './todos.entity';
import { TodosDto } from './dto/todos.dto';
import { TODO_REPOSITORY } from '../../core/constants';

@Injectable()
export class TodosService {
    constructor(@Inject(TODO_REPOSITORY) private readonly todoRepository: typeof Todos) { }

    async create(todos: TodosDto): Promise<Todos> {
        return await this.todoRepository.create<Todos>({...todos});
    }

    async findAll(): Promise<Todos[]> {
        return await this.todoRepository.findAll<Todos>({});
    }

    async findOne(id): Promise<Todos> {
        return await this.todoRepository.findOne({
            where: { id }
        });
    }

    async update(id, data) {
        const [numberOfAffectedRows, [updatedPost]] = await this.todoRepository.update({ ...data }, { where: { id }, returning: true });
        return { numberOfAffectedRows, updatedPost };
    }

    async delete(id) {
        return await this.todoRepository.destroy({ where: { id } });
    }
}
