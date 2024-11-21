import { z } from 'zod'

const cartSchema = z.object({
  clientId: z.string().uuid(),
  products: z.array(z.object({
    name: z.string().min(3),
    price: z.number().min(1),
    qtd: z.number().min(0),
    categories: z.array(z.string()).min(1)
  }))
})

const cart = {
  clientId: crypto.randomUUID(),
  products: [
    {
      name: "Macbook",
      price: 50000,
      qtd: 1,
      categories: ["Eletronico", "Computador"]
    }
  ]
}

const { success, error } = cartSchema.safeParse(cart)
console.log(error)