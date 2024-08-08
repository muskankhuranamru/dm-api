import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class SendMessageInput {
  @Field(() => Int)
  senderId: number;

  @Field(() => Int)
  recipientId: number;

  @Field()
  content: string;
}
