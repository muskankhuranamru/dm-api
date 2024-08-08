import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Message } from '../entities/message.entity';
import { User } from '../entities/user.entity';
import { MessageService } from './message.service';
import { MessageResolver } from './message.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Message, User])],
  providers: [MessageService, MessageResolver],
})
export class MessageModule {}
