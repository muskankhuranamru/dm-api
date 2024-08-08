import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Message } from '../entities/message.entity';
import { User } from '../entities/user.entity';

@Injectable()
export class MessageService {
  constructor(
    @InjectRepository(Message)
    private messageRepository: Repository<Message>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  findMessagesByRecipient(recipientId: number): Promise<Message[]> {
    return this.messageRepository.find({
      where: { recipient: { id: recipientId } },
      relations: ['sender', 'recipient'],
    });
  }

  async createMessage(
    senderId: number,
    recipientId: number,
    content: string,
  ): Promise<Message> {
    const sender = await this.userRepository.findOneBy({ id: senderId });
    const recipient = await this.userRepository.findOneBy({ id: recipientId });

    if (!sender || !recipient) {
      throw new Error('Sender or recipient not found');
    }

    const message = this.messageRepository.create({
      sender,
      recipient,
      content,
    });
    return this.messageRepository.save(message);
  }

  async updateMessageStatus(
    messageId: number,
    isAccepted: boolean,
  ): Promise<boolean> {
    const message = await this.messageRepository.findOneBy({ id: messageId });
    if (message) {
      message.isAccepted = isAccepted;
      await this.messageRepository.save(message);
      return true;
    }
    return false;
  }
}
