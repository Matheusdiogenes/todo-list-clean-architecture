import { randomUUID } from 'crypto'
import { TodoEntity, TodoPayloadInput, } from "../../../domain/todo/"
import { TodoRepoInMemory } from "../../../infra/db/"
import { UpdateTodoUseCase } from './UpdateTodoUseCase'

describe('UpdateTodoUseCase Test', () => {

  it('should update a todo status to "true"', async () => {

    const todoData: TodoPayloadInput = {
      id: randomUUID(),
      idUser: randomUUID(),
      name: 'task 2',
      description: 'task 2 description'
    }

    const todoEntity = TodoEntity.create(todoData)

    const repositoryTodo = new TodoRepoInMemory([todoEntity])
   
    const updateTodoUseCase = new UpdateTodoUseCase(repositoryTodo)    

    const expected = await updateTodoUseCase.exec(todoData.id!, true)

    expect(expected.id).toBeDefined()
    expect(expected.idUser).toBeDefined()
    expect(expected.name).toEqual(todoData.name)
    expect(expected.description).toEqual(todoData.description)
    expect(expected.status).toEqual(true)

  })
})