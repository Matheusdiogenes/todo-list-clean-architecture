import { IUserRepository } from "../../../domain/user";

export class FindOneUserUseCase {
  constructor(private userRepo: IUserRepository) { }

  async exec(id: string) {
    const user = await this.userRepo.findOne(id)    
    
    return user
  }
}