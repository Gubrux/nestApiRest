import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ProjectsModule } from './projects/projects.module';
import { TasksModule } from './tasks/tasks.module';
import { AuthModule } from './auth/auth.module';
import { TaskController } from './tasks/tasks.controller';
import { TasksService } from './tasks/tasks.service';
import { PersonasModule } from './personas/personas.module';

@Module({
  imports: [UsersModule, ProjectsModule, TasksModule, AuthModule, PersonasModule],
  controllers: [TaskController],
  providers: [TasksService],
})
export class AppModule {}
