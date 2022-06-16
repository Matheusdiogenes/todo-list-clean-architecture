import crypto from 'crypto'

export type TodoProps = {  
  name: string
  description: string
  status?: boolean
}

export class Todo {
  public readonly id: string
  public props: Required<TodoProps>
  constructor(props: TodoProps, id?: string) {
    this.id = id || crypto.randomUUID()
    this.props = {
      ...props,
      status: false
    }
  }

  updateStatus(status: boolean) {
    this.status = status
  }

  private set status(status: boolean){
    this.props.status = status
  }  
}
