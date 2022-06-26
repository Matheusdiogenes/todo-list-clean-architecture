import { randomUUID } from 'crypto'
import { CreateUserInput, UserEntity } from "../user"
import { TodoEntity } from './TodoEntity'
import { TodoInput } from './TodoPayload'

describe('Todo', () => {
  
  describe('Create', () => {
    const idUser = randomUUID()
    const userData: CreateUserInput = {
      name: 'diogenes',
      username: 'matheus',
      email: 'ma@email.com',
      password: '123456',
    }
    const user = new UserEntity(userData, idUser)
    
    const idTodo = randomUUID()
    const todoData: TodoInput = {
      idUser,
      name: 'task 1',
      description: 'description task 1'
    }
    const todo = new TodoEntity(todoData, idTodo)

    it('Should create a user', () => {
      expect(user.id).toEqual(idUser)
    })

    it('Should create a todo with status "false"', () => {      
      expect(todo.toJSON()).toStrictEqual({ id: idTodo, status: false, ...todoData })      
    })

    it('Should change status to "true"', () => {
      todo.updateStatus(true)
      expect(todo.toJSON()).toStrictEqual({ id: idTodo, status: true, ...todoData })
    })

  })
})