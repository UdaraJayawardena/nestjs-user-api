import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { UserController } from './user/user.controller';

import { AppService } from './app.service';
import { UserService } from './user/user.service';
import { PrismaService } from './prisma/prisma.service';

import { AuthModule } from './auth/auth.module';

@Module({
  imports: [AuthModule],
  controllers: [AppController, UserController],
  providers: [AppService,PrismaService, UserService],
})
export class AppModule {}
