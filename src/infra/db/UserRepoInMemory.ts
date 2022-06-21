import { IUserRepository, UserEntity } from "../../domain/user";

export class UserRepoInMemory implements IUserRepository{
  users: UserEntity[] = []

  async create(user: UserEntity): Promise<void> {
    this.users.push(user)  
  }
}