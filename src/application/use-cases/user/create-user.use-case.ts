import { User, UserProps } from "../../../domain/modules/user/user.entity";
import { IUserRepository } from "../../../domain/modules/user/user.repository";

export class CreateUserUseCase {
  constructor(private userRepository: IUserRepository) { }

  async execute(input: UserProps): Promise<CreateUserOutput>{
    const user = new User(input)
    await this.userRepository.insert(user)
    return user
  }
}

type CreateUserOutput = {
  id: string
} | UserProps
