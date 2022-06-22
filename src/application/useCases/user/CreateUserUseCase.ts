import { IUserRepository, UserEntity, CreateUserInput } from "../../../domain/user";

export class CreateUserUseCase {
  constructor(private userRepo: IUserRepository) {}

  async exec(input: CreateUserInput) {
    const user = new UserEntity(input)
    await this.userRepo.create(user)
    return user
  }
}