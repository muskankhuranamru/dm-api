import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Message } from '../entities/message.entity';

@ObjectType() // Add this decorator
@Entity()
export class User {
  @Field(() => Int) // Add this decorator
  @PrimaryGeneratedColumn()
  id: number;

  @Field() // Add this decorator
  @Column()
  username: string;

  @Field() // Add this decorator
  @Column()
  email: string;

  @Field(() => [Message]) // Add this decorator
  @OneToMany(() => Message, (message) => message.sender)
  sentMessages: Message[];

  @Field(() => [Message]) // Add this decorator
  @OneToMany(() => Message, (message) => message.recipient)
  receivedMessages: Message[];
}
