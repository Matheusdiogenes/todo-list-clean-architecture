import { randomUUID } from 'crypto'
import { UserOutput } from '../../../domain/user'
import { UserRepoInMemory } from "../../../infra/db"
import { FindAllUserUseCase } from './FindAllUserUseCase'

describe('FindAllUserUseCase Test', () => {
  it('should find all user', async () => {
    // Mock
    const userData: UserOutput[] = [
      {
        id: randomUUID(),
        email: 'any_email',
        username: 'any username',
        name: "any name",
        password: 'secret'
      },
      {
        id: randomUUID(),
        email: 'any_email',
        username: 'any username',
        name: "any name",
        password: 'secret'
      }
    ]
    const repository = new UserRepoInMemory(userData)
    const findAllUserUseCase = new FindAllUserUseCase(repository)

    const users = await findAllUserUseCase.exec()

    expect(users).toHaveLength(2)
  })
})