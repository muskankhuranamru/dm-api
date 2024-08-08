import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from '../entities/user.entity';
import { CreateUserInput } from '../dto/create-user.input';

@Resolver(() => User)
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query(() => [User])
  users(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Query(() => User)
  user(@Args('id', { type: () => Int }) id: number): Promise<User> {
    return this.userService.findOne(id);
  }

  @Mutation(() => User)
  createUser(
    @Args('createUserInput') createUserInput: CreateUserInput,
  ): Promise<User> {
    return this.userService.create(
      createUserInput.username,
      createUserInput.email,
    );
  }
}
