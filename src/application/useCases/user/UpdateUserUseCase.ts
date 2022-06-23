import { IUserRepository, UpdateUserInput, UserEntity } from "../../../domain/user";

export class UpdateUserUseCase {
  constructor(private userRepo: IUserRepository) {}

  async exec(id: string, userData: UpdateUserInput) {
    const findUser = await this.userRepo.findOne(id)
    
    if(!findUser){
      return new Error('User not find.')
    }
    const userUpdated = await this.userRepo.save(id, userData)

    return userUpdated
  }
}