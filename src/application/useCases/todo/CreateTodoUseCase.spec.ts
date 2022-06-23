import crypto from 'crypto'
import { TodoPayloadInput,  } from "../../../domain/todo/"
import { TodoRepoInMemory } from "../../../infra/db/"
import { CreateTodoUseCase } from "./CreateTodoUseCase"

describe('CreateTodoUseCase Test', () => {  
  
  it('should insert a new todo', async () => {    
    
    const user = {
      id: crypto.randomUUID(),
      name: 'user2',
      username: 'any_user',
      email: 'user2@email.com',
      password: '123456',
    }    
    
    const repositoryTodo = new TodoRepoInMemory()
    const createTodoUseCase = new CreateTodoUseCase(repositoryTodo)
    const todoData: TodoPayloadInput = {
      idUser: user.id,
      name: 'task 1',
      description: 'task 1 description'
    }

    const expected = await createTodoUseCase.exec(todoData)

    expect(expected.id).toBeDefined()
    expect(expected.idUser).toBeDefined()
    expect(expected.name).toEqual(todoData.name)
    expect(expected.description).toEqual(todoData.description)
    expect(expected.status).toEqual(false)
    
  })
})