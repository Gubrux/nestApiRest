import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TaskController } from './tasks.controller';

@Module({
  controllers: [TaskController],
  providers: [TasksService],
})
export class TasksModule {}
