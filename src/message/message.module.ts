import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Message } from '../entities/message.entity';
import { User } from '../entities/user.entity'; // Import User entity
import { MessageService } from './message.service';
import { MessageResolver } from './message.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Message, User])], // Include User entity here
  providers: [MessageService, MessageResolver],
})
export class MessageModule {}
