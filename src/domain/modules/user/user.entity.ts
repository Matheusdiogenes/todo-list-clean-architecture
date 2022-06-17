export interface Task {  
  name: string
  description: string
  status?: boolean
}


export interface User {  
  name: string
  username: string
  email: string
  password: string
  tasks?: Task[]
}

export class UserEntity {
  public props: Required<User>

  constructor(props: User) {
    this.props = {
      ...props,
      tasks: []
    }
  }

  static create(User: User) {
    return new UserEntity(User)
  }

}
