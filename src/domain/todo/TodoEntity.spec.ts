import { TodoPayload } from "./type"
import { TodoEntity } from '../todo/TodoEntity'

describe('Create', () => {
  it('Should not create a todo with empty name', () => {
    const totoData: TodoPayload = {
      name: '',
      description: 'description task 1'
    }

    const todo = TodoEntity.validator(totoData)

    expect(todo).toEqual(new Error('name invalid'))
  })

  it('Should not create a todo with empty description', ()=> {
    const totoData: TodoPayload = {
      name: 'task 1',
      description: ''
    }

    const todo = TodoEntity.validator(totoData)

    expect(todo).toEqual(new Error('description invalid'))
  })

  it('Should create a todo with status "false"', ()=> {
    const totoData: TodoPayload = {
      name: 'task 1',
      description: 'description task 1'
    }

    const todo = TodoEntity.create(totoData)

    expect(todo.name).toEqual(totoData.name)
    expect(todo.description).toEqual(totoData.description)
    expect(todo.status).toEqual(false)
  })
})