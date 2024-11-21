import { z } from 'zod'

const userSchema = z.object({
  name: z.string().min(2),
  workDays: z.array(
    z.string().transform(day => day.slice(0, 3).toLowerCase())
  )
})

const user = {
  name: "Er",
  workDays: ["Segunda", "teRça", "qUarta", "quinta"]
}

const { success, data } = userSchema.safeParse(user)
console.log(data)