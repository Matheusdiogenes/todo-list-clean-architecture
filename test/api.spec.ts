import axios from 'axios'
import { TodoInput } from '../src/domain/todo'

describe('API Test', () => {

  describe('Create User and Todo', () => {
    const userOneTest: { id: string, idTodos: string[] } = {
      id: '',
      idTodos: []
    }
    it('should create a user #1', async () => {
      const userOne = {
        "name": "diogenes",
        "username": "matheus",
        "email": "ma@email.com",
        "password": "123456"
      }
      const request = await axios.post('http://localhost:3333/user', userOne)
      userOneTest.id = request.data.user.id

      expect(request.data.user.id).toBeDefined()
      expect(request.data.user.name).toEqual(userOne.name)
      expect(request.data.user.email).toEqual(userOne.email)
      expect(request.data.user.username).toEqual(userOne.username)
      expect(request.data.user.password).toEqual(userOne.password)
    })

    it('should find a user #1', async () => {
      const request = await axios.get(`http://localhost:3333/user/${userOneTest.id}`)

      expect(request.data.user).toStrictEqual({
        id: userOneTest.id,
        name: "diogenes",
        username: "matheus",
        email: "ma@email.com",
        password: "123456"
      })
    })

    it('should find all users', async () => {
      const request = await axios.get(`http://localhost:3333/user`)
      expect(request.data.user).toHaveLength(1)
    })

    it('should create a todo (user #1)', async () => {
      const todoOne: TodoInput = {
        idUser: userOneTest.id,
        name: "task 1",
        description: "description task 1"
      }
      const request = await axios.post('http://localhost:3333/todo', todoOne)      
      userOneTest.idTodos.push(request.data.todo.id)

      expect(request.data.todo.id).toBeDefined()
      expect(request.data.todo.idUser).toEqual(todoOne.idUser)
      expect(request.data.todo.name).toEqual(todoOne.name)
      expect(request.data.todo.description).toEqual(todoOne.description)
    })

    it('should find all todos (user #1)', async () => {      
      const request = await axios.get(`http://localhost:3333/todo/${userOneTest.id}`)
      expect(request.data.todo).toHaveLength(1)
    })

    it('should update a todo (user #1)', async () => {      
      const request = await axios.put(`http://localhost:3333/todo/${userOneTest.idTodos[0]}`, {        
        status: true
      })
      expect(request.data.todo.status).toEqual(true)
    })

    it('should delete a todo (user #1)', async () => {      
      const request = await axios.delete(`http://localhost:3333/todo/${userOneTest.idTodos[0]}`)
      expect(request.status).toEqual(200)
    })

    it('should todos emply (user #1)', async () => {      
      const request = await axios.get(`http://localhost:3333/todo/${userOneTest.id}`)
      expect(request.data.todo).toHaveLength(0)
    })

  })
})