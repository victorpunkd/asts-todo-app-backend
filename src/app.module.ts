import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './core/database/database.module';

import { ConfigModule } from '@nestjs/config';
import { TodosModule } from './modules/todos/todos.module';

@Module({
  imports: [DatabaseModule, ConfigModule.forRoot({ isGlobal: true }), TodosModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
