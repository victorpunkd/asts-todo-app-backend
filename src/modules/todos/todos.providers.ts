import { Todos } from './todos.entity';
import { TODO_REPOSITORY } from '../../core/constants';

export const todoProviders = [{
    provide: TODO_REPOSITORY,
    useValue: Todos,
}];