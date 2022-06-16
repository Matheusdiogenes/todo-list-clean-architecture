import { Todo } from "./todo.entity"

describe('Todo', () => {
  test('Create', () => {
    const todo = new Todo({
      name: 'task 1',
      description: 'description task 1'
    })

    expect(todo.id).toBeDefined()
    expect(todo.props).toStrictEqual({
      ...todo.props,
      status: false
    })
  })

  test('Update Status', () => {
    const todo = new Todo({
      name: 'task 1',
      description: 'description task 1',      
    })

    todo.updateStatus(true)

    expect(todo.id).toBeDefined()
    expect(todo.props).toStrictEqual({
      ...todo.props,
      status: true
    })
  })
})