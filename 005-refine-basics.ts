import { z } from 'zod'

const userSchema = z.object({
  name: z.string().min(2),
  instagram: z
    .string()
    .url()
    .refine(url => url.includes('instagram.com'), {
      message: "Coloque a url do instagram"
    })
    .optional(),
})

const user = {
  name: "Toshyro",
  instagram: "https://www.instagram.com/kaique.pereira/"
}

const { error } = userSchema.safeParse(user)
console.log(error)