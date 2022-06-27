import { UserInput, UserOutput } from '../user'

export interface IUserRepository {
  create(userCreate: UserInput, id?: string): Promise<UserOutput>
  // update(id: string, userUpdate: UserUpdate): Promise<void | UserOutput>  
  findOne(id: string): Promise<UserOutput | undefined>
  findAll(): Promise<UserOutput[]>
}