import { IUserRepository, UserEntity, UserInput } from "../../../domain/user";

export class CreateUserUseCase {
  constructor(private userRepo: IUserRepository) {}

  async exec(input: UserInput, id?: string) {
    const user = new UserEntity(input, id).toJSON()
    await this.userRepo.create(user, user.id)
    return user
  }
}