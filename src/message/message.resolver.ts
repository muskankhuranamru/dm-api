import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { MessageService } from './message.service';
import { Message } from '../entities/message.entity';
import { SendMessageInput } from '../dto/send-message.input';

@Resolver(() => Message)
export class MessageResolver {
  constructor(private messageService: MessageService) {}

  @Query(() => [Message])
  async messages(
    @Args('recipientId', { type: () => Int }) recipientId: number,
  ): Promise<Message[]> {
    return this.messageService.findMessagesByRecipient(recipientId);
  }

  @Mutation(() => Message)
  async sendMessage(
    @Args('sendMessageInput') sendMessageInput: SendMessageInput,
  ): Promise<Message> {
    return this.messageService.createMessage(
      sendMessageInput.senderId,
      sendMessageInput.recipientId,
      sendMessageInput.content,
    );
  }

  @Mutation(() => Boolean)
  async acceptMessageRequest(
    @Args('messageId', { type: () => Int }) messageId: number,
  ): Promise<boolean> {
    return this.messageService.updateMessageStatus(messageId, true);
  }

  @Mutation(() => Boolean)
  async rejectMessageRequest(
    @Args('messageId', { type: () => Int }) messageId: number,
  ): Promise<boolean> {
    return this.messageService.updateMessageStatus(messageId, false);
  }
}
