import { IUserRepository, UserEntity, UserPayload } from "../domain/user";

export class CreateUserUseCase {
  constructor(private userRepo: IUserRepository) {}

  async exec(input: UserPayload): Promise<UserPayloadOutput> {
    const user = new UserEntity(input)
    await this.userRepo.create(user)
    return user
  }
}

type UserPayloadOutput = UserPayload & {
  id: string
}