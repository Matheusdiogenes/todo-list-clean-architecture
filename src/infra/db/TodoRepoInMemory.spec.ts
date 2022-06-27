import { randomUUID } from 'crypto'
import { TodoEntity, TodoInput } from '../../domain/todo/'
import { TodoRepoInMemory } from "../../infra/db/"

describe('TodoRepoInMemory Test', () => {

  it('should insert a new todo', async () => {
    const todoRepoInMemory = new TodoRepoInMemory()

    const todoData: TodoInput = {
      idUser: randomUUID(),
      name: "task 1",
      description: 'description task 1'
    }

    const todo = TodoEntity.create(todoData)

    await todoRepoInMemory.save(todo)

    expect(todo.id).toBeDefined();
    expect(todo.idUser).toBeDefined();
    expect(todo.name).toEqual(todoData.name)
    expect(todo.description).toEqual(todoData.description)
  })

  it('should find a todo', async () => {

    const todoData: TodoInput = {
      idUser: randomUUID(),
      name: 'task 2',
      description: 'task 2 description'
    }

    const todoEntity = TodoEntity.create(todoData)
    const todoRepoInMemory = new TodoRepoInMemory([todoEntity])

    const todo = await todoRepoInMemory.findOne(todoEntity.idUser, todoEntity.id)

    expect(todo.id).toEqual(todoEntity.id);
    expect(todo.idUser).toEqual(todoData.idUser);
    expect(todo.name).toEqual(todoData.name)
    expect(todo.description).toEqual(todoData.description)
    expect(todo.status).toEqual(false)
  })

  it('should update todo status', async () => {

    const idUser = randomUUID()
    const idTodo = randomUUID()

    const todoData: TodoInput = {
      idUser: idUser,
      name: 'task 2',
      description: 'task 2 description'
    }

    const todoEntity = TodoEntity.create(todoData, idTodo)
    const todoRepoInMemory = new TodoRepoInMemory([todoEntity])

    const todo = await todoRepoInMemory.update(todoData.idUser, todoEntity.id, true)

    expect(todo.id).toEqual(todoEntity.id);
    expect(todo.idUser).toEqual(todoData.idUser);
    expect(todo.name).toEqual(todoData.name)
    expect(todo.description).toEqual(todoData.description)
    expect(todo.status).toEqual(true)
  })

  it('should delete todo', async () => {

    const todoData: TodoInput = {
      idUser: randomUUID(),
      name: 'task 2',
      description: 'task 2 description'
    }

    const todoEntity = TodoEntity.create(todoData)
    const todoRepoInMemory = new TodoRepoInMemory([todoEntity])

    await todoRepoInMemory.delete(todoData.idUser, todoEntity.id)

    expect(todoRepoInMemory.todos).toHaveLength(0);
  })

})