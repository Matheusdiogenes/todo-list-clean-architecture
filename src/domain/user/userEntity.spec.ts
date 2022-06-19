import { UserPayload } from "./type"
import { UserEntity } from "./UserEntity"

describe('User', () => {

  describe('Create', () => {

    it('Should not create a user with empty name', () => {
      const userData: UserPayload = {
        name: '',
        username: 'matheus',
        email: 'ma@email.com',
        password: '123456',
      }

      const user = UserEntity.validator(userData)

      expect(user).toEqual(new Error('name invalid'))
    })

    it('Should not create a user with empty username', () => {
      const userData: UserPayload = {
        name: 'diogenes',
        username: '',
        email: 'ma@email.com',
        password: '123456',
      }

      const user = UserEntity.validator(userData)
      expect(user).toEqual(new Error('username invalid'))
    })

    it('Should not create a user with empty username', () => {
      const userData: UserPayload = {
        name: 'diogenes',
        username: '',
        email: 'ma@email.com',
        password: '123456',
      }

      const user = UserEntity.validator(userData)
      expect(user).toEqual(new Error('username invalid'))
    })

    it('Should not create a user with empty email', () => {
      const userData: UserPayload = {
        name: 'diogenes',
        username: 'matheus',
        email: '',
        password: '123456',
      }

      const user = UserEntity.validator(userData)
      expect(user).toEqual(new Error('email invalid'))
    })
    
    it('Should not create a user with empty password', () => {
      const userData: UserPayload = {
        name: 'diogenes',
        username: 'matheus',
        email: 'ma@email.com',
        password: '',
      }

      const user = UserEntity.validator(userData)
      expect(user).toEqual(new Error('password invalid'))
    })
    
    it('Should create a user with empty to-do list', () => {
      const userData: UserPayload = {
        name: 'diogenes',
        username: 'matheus',
        email: 'ma@email.com',
        password: '123456',
      }
      const user = UserEntity.create(userData)      

      expect(user.name).toEqual(userData.name)
      expect(user.username).toEqual(userData.username)
      expect(user.email).toEqual(userData.email)
      expect(user.password).toEqual(userData.password)
      expect(user.tasks).toHaveLength(0)
    })



  })

})