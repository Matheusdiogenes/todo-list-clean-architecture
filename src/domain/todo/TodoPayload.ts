export type TodoInput = {  
  idUser: string
  name: string
  description: string  
}

export type TodoOutput = TodoInput & {  
  id: string
  status: boolean
}


export type TodoUpdate = {
  name?: string
  description?: string  
  status?: boolean
}