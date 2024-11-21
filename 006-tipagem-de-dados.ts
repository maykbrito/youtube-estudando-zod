import { z } from 'zod'

const userSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(6),
  age: z.string().transform(value => Number(value)),
  isAdmin: z.boolean().default(false).optional(),
  message: z.array(z.object({
    id: z.string(),
    message: z.string(),
  })).optional(),
})

type UserType = z.infer<typeof userSchema>

const user: UserType = {
  age: 10,
  email: 'test@test.com',
  name: 'test',
  password: '123456'
}

type UserTypeInput = z.input<typeof userSchema>
type UserTypeOutput = z.output<typeof userSchema>
type UserMessages = z.infer<typeof userSchema>['message']