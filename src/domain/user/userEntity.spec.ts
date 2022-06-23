import { CreateUserInput, UpdateUserInput, UserEntity } from '../../domain/user/'

describe('User', () => {
  describe('Create', () => {

    const createData: CreateUserInput = {
      name: 'diogenes',
      username: 'matheus',
      email: 'ma@email.com',
      password: '123456',
    }
    const user = new UserEntity(createData)
    it('Should create a user with empty to-do list', () => {
      expect(user.id).toBeDefined();
      expect(user.name).toEqual(createData.name)
      expect(user.username).toEqual(createData.username)
      expect(user.email).toEqual(createData.email)
      expect(user.password).toEqual(createData.password)
    })

    it('Should update a user', () => {
      const updateData: UpdateUserInput = {
        name: 'Jõao',
        password: '123'
      }
      user.updateUser(updateData)

      expect(user.id).toBeDefined();
      expect(user.name).toEqual(updateData.name)
      expect(user.username).toEqual(createData.username)
      expect(user.email).toEqual(createData.email)
      expect(user.password).toEqual(updateData.password)  
    })

  })
})