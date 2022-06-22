import { CreateUserInput, CreateUserOutput, IUserRepository, UpdateUserInput } from "../../domain/user";

export class UserRepoInMemory implements IUserRepository{
  users: CreateUserOutput[] = []

  async create(user: CreateUserInput): Promise<CreateUserOutput> {
    this.users.push(user)  
    return user
  }

  async update(userUpdate: UpdateUserInput): Promise<void> {
    throw new Error('Not implemented')
  }
}