import { z } from 'zod'

const userSchema = z.object({
  email: z.string().email("email inválido"),
  age: z.number().min(18).max(100),
  apelido: z.string().min(2).optional()
})

const user = {
  email: "valido@email.com",
  age: 5,
  apelido: 'ae'
}

const { success, error } = userSchema.safeParse(user)
console.log(success)
console.log(error)