import { TodoPayload } from "../../todo/type"

export type UserPayload = {
  name: string
  username: string
  email: string
  password: string
  tasks?: TodoPayload[]
}
