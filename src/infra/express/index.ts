import express, { Request, Response } from 'express'
import cors from 'cors'
import { CreateUserUseCase, FindOneUserUseCase, FindAllUserUseCase } from '../../application/useCases/user'
import { TodoRepoInMemory, UserRepoInMemory } from '../db'
import { CreateTodoUseCase, DeleteTodoUseCase, FindAllTodoUseCase, UpdateTodoUseCase } from '../../application/useCases/todo'

const repositoryUser = new UserRepoInMemory()
const repositoryTodo = new TodoRepoInMemory()
const createUserUseCase = new CreateUserUseCase(repositoryUser)
const findOneUserUseCase = new FindOneUserUseCase(repositoryUser)
const findAllUserUseCase = new FindAllUserUseCase(repositoryUser)
const createTodoUseCase = new CreateTodoUseCase(repositoryTodo)
const findAllTodoUseCase = new FindAllTodoUseCase(repositoryTodo)
const updateTodoUseCase = new UpdateTodoUseCase(repositoryTodo)
const deleteTodoUseCase = new DeleteTodoUseCase(repositoryTodo)

const app = express()
app.use(express.json())
app.use(cors())

app.get('/', (req: Request, res: Response) => {
  res.json({ api: 'ON' })
})

app.post('/user', async (req: Request, res: Response) => {
  const { name, username, email, password } = req.body
  const userData = { name, username, email, password, }
  const user = await createUserUseCase.exec(userData)
  res.json({ user })
})

app.get('/user/:id', async (req: Request, res: Response) => {
  const user = await findOneUserUseCase.exec(req.params.id)
  res.json({ user })
})

app.get('/user', async (req: Request, res: Response) => {
  const user = await findAllUserUseCase.exec()
  res.json({ user })
})

app.post('/todo', async (req: Request, res: Response) => {
  const { idUser, name, description } = req.body
  const todoData = { idUser, name, description }
  const todo = await createTodoUseCase.exec(todoData)
  res.json({ todo })
})

app.put('/todo/:id', async (req: Request, res: Response) => {
  const id: string = req.params.id
  const { status } = req.body
  const todo = await updateTodoUseCase.exec(id, status)
  res.json({ todo })
})

app.delete('/todo/:id', async (req: Request, res: Response) => {  
  const id = req.params.id
  const todo = await deleteTodoUseCase.exec(id)
  res.json({ todo })
})

app.get('/todo/:idUser', async (req: Request, res: Response) => {
  const idUser: string = req.params.idUser
  const todo = await findAllTodoUseCase.exec(idUser)
  res.json({ todo })
})

const PORT = 3333
app.listen(3333, () => {
  console.log(`server run: localhost:${PORT}`);

})