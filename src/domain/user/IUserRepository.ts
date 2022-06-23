import { CreateUserInput, CreateUserOutput, UpdateUserInput, UserEntity } from '../user'

export interface IUserRepository {
  create(userCreate: CreateUserInput): Promise<UserEntity>
  update(userUpdate: UpdateUserInput): Promise<void>
  findOne(id: string): Promise<CreateUserOutput | undefined>
}