import { UserInput, UserOutput, IUserRepository, UserEntity } from "../../domain/user";

export class UserRepoInMemory implements IUserRepository {
  users: UserOutput[] = []

  constructor(users?: UserOutput[]) {
    this.users = users || []
  }

  async create(userData: UserInput, id?: string): Promise<UserOutput> {
    const user = new UserEntity(userData, id).toJSON()
    this.users.push(user)
    return user
  }

  async findOne(id: string): Promise<UserOutput | undefined> {
    const user = this.users.find(u => u.id === id)
    if (!user) {
      return undefined
    }
    return user
  }

  async findAll(): Promise<UserOutput[]> {
    const user = this.users    
    return user
  }

  // async update(id: string, userUpdate: UserUpdate): Promise<void | UserOutput> {
  //   const findOne = this.users.find(u => u.id === id)    
  //   const user = updateUser(findOne, userUpdate)
  //   if(user instanceof Error){
  //     return
  //   }
  //   this.users = this.users.filter(u => u.id !== id)        
  //   this.users.push(user)
  //   return user
  // }
}