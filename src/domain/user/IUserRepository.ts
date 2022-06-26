import { CreateUserInput, CreateUserOutput, UpdateUserInput, UserEntity } from '../user'

export interface IUserRepository {
  create(userCreate: CreateUserInput): Promise<UserEntity>
  save(id: string, userUpdate: UpdateUserInput): Promise<void | CreateUserOutput>
  update(userUpdate: UpdateUserInput): Promise<void>
  findOne(id: string): Promise<CreateUserOutput | undefined>
  findAll(): Promise<CreateUserOutput[]>
}