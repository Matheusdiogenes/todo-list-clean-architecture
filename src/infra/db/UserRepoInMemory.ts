import { CreateUserInput, IUserRepository, UpdateUserInput, UserEntity } from "../../domain/user";

export class UserRepoInMemory implements IUserRepository{
  users: UserEntity[] = []

  async create(userData: CreateUserInput): Promise<UserEntity> {
    const user = new UserEntity(userData)
    this.users.push(user)  
    return user
  }

  async update(userUpdate: UpdateUserInput): Promise<void> {
    throw new Error('Not implemented')
  }
}