import { z } from 'zod'

const devSchema = z.object({
  name: z.string().min(5),
  email: z.string().email(),
  primaryProgrammingLanguage: z.string().min(2),
  level: z.enum(['junior', 'pleno', 'senior']),
  experienceInYears: z.number().min(1).max(30),
  technologies: z.array(z.string()).min(1),
}).refine(dev => {
  if (dev.level === 'senior') {
    return dev.experienceInYears >= 5 && dev.technologies.length >= 2
  }

  return true
}, { message: "Não pode ser senior" })

const seniorNaoPassou = {
  name: "Toshyro",
  email: "toshyro@gmail.com",
  primaryProgrammingLanguage: "TypeScript",
  level: "senior",
  experienceInYears: 3,
  technologies: ["React", "Node.js"]
}

console.log("Não passou:", devSchema.safeParse(seniorNaoPassou))

const seniorPassou = {
  name: "Toshyro",
  email: "toshyro@gmail.com",
  primaryProgrammingLanguage: "TypeScript",
  level: "senior",
  experienceInYears: 5,
  technologies: ["React", "Node.js"]
}

console.log("Passou:", devSchema.safeParse(seniorPassou))

const junior = {
  name: "Toshyro",
  email: "toshyro@gmail.com",
  primaryProgrammingLanguage: "TypeScript",
  level: "junior",
  experienceInYears: 1,
  technologies: ["React"]
}

console.log("Junior:", devSchema.safeParse(junior))