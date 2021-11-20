import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { LabelsModule } from './labels/labels.module';
import { FavoritesModule } from './favorites/favorites.module';

@Module({
  imports: [TasksModule, AuthModule, UsersModule, LabelsModule, FavoritesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
