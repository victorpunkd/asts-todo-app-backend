import { Module } from '@nestjs/common';

import { TodosService } from './todos.service';
import { TodosController } from './todos.controller';
import { todoProviders } from "./todos.providers"

@Module({
  providers: [TodosService,...todoProviders],
  controllers: [TodosController]
})
export class TodosModule {}
