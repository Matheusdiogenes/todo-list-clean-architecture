import { CreateUserInput, CreateUserOutput, IUserRepository, updateUser, UpdateUserInput, UserEntity } from "../../domain/user";

export class UserRepoInMemory implements IUserRepository {
  users: CreateUserOutput[] = []

  constructor(users?: CreateUserOutput[]) {
    this.users = users || []
  }

  async create(userData: CreateUserInput, id?: string): Promise<UserEntity> {
    const user = new UserEntity(userData, id)
    this.users.push(user)
    return user
  }

  async update(userUpdate: UpdateUserInput): Promise<void> {
    throw new Error('Not implemented')
  }

  async findOne(id: string): Promise<CreateUserOutput | undefined> {
    const user = this.users.find(u => u.id === id)    
    
    if (!user) {
      return undefined
    }
    return user
  }

  async findAll(): Promise<CreateUserOutput[]> {
    const user = this.users    
    return user
  }

  async save(id: string, userUpdate: UpdateUserInput): Promise<void | CreateUserOutput> {
    const findOne = this.users.find(u => u.id === id)    
    const user = updateUser(findOne, userUpdate)
    if(user instanceof Error){
      return
    }
    this.users = this.users.filter(u => u.id !== id)        
    this.users.push(user)
    return user
  }
}