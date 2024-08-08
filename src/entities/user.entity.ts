import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Message } from '../entities/message.entity';

@ObjectType()
@Entity()
export class User {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  username: string;

  @Field()
  @Column()
  email: string;

  @Field(() => [Message])
  @OneToMany(() => Message, (message) => message.sender)
  sentMessages: Message[];

  @Field(() => [Message])
  @OneToMany(() => Message, (message) => message.recipient)
  receivedMessages: Message[];
}
