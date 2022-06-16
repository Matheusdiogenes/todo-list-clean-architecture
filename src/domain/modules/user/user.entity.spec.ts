import { TodoProps } from "../todo/todo.entity"
import { User } from "./user.entity"

describe('User', () => {
  test('Create', () => {
    const user = new User({
      name: 'matheus diogenes',
      username: 'matheus'
    })

    expect(user.id).toBeDefined()
    expect(user.props).toStrictEqual({
      ...user.props,
    })
    expect(user.props.tasks).toHaveLength(0)
  })

  test('Add Tasks', () => {
    const user = new User({
      name: 'matheus diogenes',
      username: 'matheus'
    })
    const task: TodoProps[] = [
      {
        name: 'task 1',
        description: 'make task 1'
      }
    ]

    user.updateTasks(task)

    expect(user.id).toBeDefined()
    expect(user.props).toStrictEqual({
      ...user.props,
    })
    expect(user.props.tasks).toHaveLength(1)

  })

})