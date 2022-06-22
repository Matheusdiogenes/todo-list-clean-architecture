import crypto from 'crypto'
import { TodoPayload,  } from "../domain/todo"
import { UserEntity } from '../domain/user'
import { TodoRepoInMemory } from "../infra/db"
import { CreateTodoUseCase } from "./CreateTodoUseCase"

describe('CreateTodoUseCase Test', () => {  
  
  it('should insert a new todo', async () => {    
    
    const user: UserEntity = {
      id: crypto.randomUUID(),
      name: 'user2',
      username: 'any_user',
      email: 'user2@email.com',
      password: '123456',
    }    
    
    const repositoryTodo = new TodoRepoInMemory()
    const createTodoUseCase = new CreateTodoUseCase(repositoryTodo)
    const todoData: TodoPayload = {
      idUser: user.id,
      name: 'task 1',
      description: 'task 1 description'
    }

    const expected = await createTodoUseCase.exec(todoData, user.id)

    expect(expected.id).toBeDefined()
    expect(expected.idUser).toBeDefined()
    expect(expected.name).toEqual(todoData.name)
    expect(expected.description).toEqual(todoData.description)
    expect(expected.status).toEqual(false)
    
  })
})