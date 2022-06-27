import { randomUUID } from 'crypto'
import { TodoEntity, TodoInput, } from "../../../domain/todo/"
import { TodoRepoInMemory } from "../../../infra/db/"
import { UpdateTodoUseCase } from './UpdateTodoUseCase'

describe('UpdateTodoUseCase Test', () => {

  it('should update a todo status to "true"', async () => {

    const idUser = randomUUID()
    const todoData: TodoInput = {
      idUser: idUser,
      name: 'task 2',
      description: 'task 2 description'
    }

    const todoEntity = TodoEntity.create(todoData).toJSON()

    const repositoryTodo = new TodoRepoInMemory([todoEntity])

    const updateTodoUseCase = new UpdateTodoUseCase(repositoryTodo)

    const expected = await updateTodoUseCase.exec(idUser, todoEntity.id, true)

    expect(expected.id).toBeDefined()
    expect(expected.idUser).toBeDefined()
    expect(expected.name).toEqual(todoData.name)
    expect(expected.description).toEqual(todoData.description)
    expect(expected.status).toEqual(true)

  })
})