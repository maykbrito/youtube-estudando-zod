import { z } from 'zod'

// Exercicio 01
const userNameSchema = z.string().min(3, "Mínimo 3 caracteres").max(20)

const { success, error } = userNameSchema.safeParse('Jo')
if (!success) {
  console.dir(error.errors[0].message)
}