import { randomUUID } from 'crypto'
import { UserOutput } from '../../../domain/user'
import { UserRepoInMemory } from "../../../infra/db"
import { FindOneUserUseCase } from './FindOneUserUseCase'

describe('FindOneUserUseCase Test', () => {
  it('should find all user', async () => {
    // Mock
    const idUser = randomUUID()
    const userData: UserOutput[] = [
      {
        id: randomUUID(),
        email: 'any_email',
        username: 'any username',
        name: "any name",
        password: 'secret'
      },
      {
        id: idUser,
        email: 'any_email2',
        username: 'any username2',
        name: "any name2",
        password: 'secret'
      }
    ]
    const repository = new UserRepoInMemory(userData)
    const findAllUserUseCase = new FindOneUserUseCase(repository)

    const user = await findAllUserUseCase.exec(idUser)

    expect(user).toStrictEqual(userData[1])
  })
})