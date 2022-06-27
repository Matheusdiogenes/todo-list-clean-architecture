import { UserInput } from "../../../domain/user"
import { UserRepoInMemory } from "../../../infra/db"
import { CreateUserUseCase } from "./CreateUserUseCase"

describe('CreateUserUseCase Test', () => {

  it('should insert a new user', async () => {
    const repository = new UserRepoInMemory()
    const createUserUseCase = new CreateUserUseCase(repository)
    const userData: UserInput = {
      name: 'diogenes',
      username: 'matheus',
      email: 'ma@email.com',
      password: '123456',
    }
    const expected = await createUserUseCase.exec(userData)

    expect(expected.id).toBeDefined()
    expect(expected.name).toEqual(userData.name)
    expect(expected.username).toEqual(userData.username)
    expect(expected.email).toEqual(userData.email)
    expect(expected.password).toEqual(userData.password)
  })
})