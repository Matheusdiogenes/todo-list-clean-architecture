import { randomUUID } from 'crypto'
import { UserInput, UserEntity } from '../../domain/user/'

describe('UserEntity Test', () => {
  it('Should create a user', () => {
    const idUser = randomUUID()
    const createData: UserInput = {
      name: 'diogenes',
      username: 'matheus',
      email: 'ma@email.com',
      password: '123456',
    }
    const user = new UserEntity(createData, idUser).toJSON()

    expect(user.id).toEqual(idUser);
    expect(user.name).toEqual(createData.name)
    expect(user.username).toEqual(createData.username)
    expect(user.email).toEqual(createData.email)
    expect(user.password).toEqual(createData.password)
  })

})