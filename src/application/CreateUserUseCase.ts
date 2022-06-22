import { IUserRepository, UserEntity, CreateUserInput, CreateUserOutput } from "../domain/user";

export class CreateUserUseCase {
  constructor(private userRepo: IUserRepository) {}

  async exec(input: CreateUserInput): Promise<CreateUserOutput> {
    const user = new UserEntity(input)
    await this.userRepo.create(user)
    return user
  }
}