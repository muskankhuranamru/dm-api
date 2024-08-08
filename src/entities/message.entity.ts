import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from '../entities/user.entity';

@ObjectType()
@Entity()
export class Message {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  content: string;

  @Field(() => User)
  @ManyToOne(() => User, (user) => user.sentMessages, { nullable: false })
  sender: User;

  @Field(() => User)
  @ManyToOne(() => User, (user) => user.receivedMessages, { nullable: false })
  recipient: User;

  @Field()
  @Column({ default: false })
  isAccepted: boolean;
}
