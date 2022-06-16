import crypto from 'crypto'
import { TodoProps } from "../todo/todo.entity"

export type UserProps = {  
  name: string
  username: string
  tasks?: TodoProps[]
}

export class User {
  public readonly id: string
  public props: Required<UserProps>
  constructor(props: UserProps, id?: string) {
    this.id = id || crypto.randomUUID()
    this.props = {
      ...props,
      tasks: []
    }
  }

  updateTasks(tasks: TodoProps[]){
    this.props.tasks = tasks
  }

}
