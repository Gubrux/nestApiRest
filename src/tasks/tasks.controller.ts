import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TaskDto } from 'src/dtos/task.dto';

@Controller('/tasks')
export class TaskController {
  constructor(private taskService: TasksService) {}

  @Get()
  getAllTasks(): TaskDto {
    return this.taskService.getTasks();
  }
  @Post()
  createTask() {
    return this.taskService.createTask();
  }

  @Put()
  updateTask() {
    return this.taskService.updateTask();
  }

  @Patch()
  actualizacionParcial() {
    return this.taskService.actualizacionParcial();
  }

  @Delete('/:id')
  deleteTask() {
    return this.taskService.deleteTask();
  }
}
