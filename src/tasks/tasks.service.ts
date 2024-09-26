import { Injectable } from '@nestjs/common';
import { TaskDto } from 'src/dtos/task.dto';

@Injectable()
export class TasksService {
  getTasks(): TaskDto {
    return {
      tasks: ['tarea 1', 'tarea 2', 'tarea 3'],
      description: 'todas las tareas',
    };
  }

  createTask() {
    return 'la tarea se ha creado';
  }

  updateTask() {
    return 'actualizando la tarea';
  }

  actualizacionParcial() {
    return 'actualizando la tarea de manera parcial';
  }

  deleteTask() {
    return 'borrando la tarea';
  }

  getTaskById(id: string) {
    return `la tarea con el id ${id} ha sido encontrada`;
  }
}
