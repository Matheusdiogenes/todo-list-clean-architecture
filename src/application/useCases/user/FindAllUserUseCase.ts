import { IUserRepository } from "../../../domain/user";

export class FindAllUserUseCase {
  constructor(private userRepo: IUserRepository) { }

  async exec() {
    const user = await this.userRepo.findAll()
    return user
  }
}