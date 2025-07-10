import { Router } from "express"

const router = Router()
const projetos = [
  {
    title: "App de Saúde Mental",
    autor: "Loid Padre",
    data: "08/07/2025",
    description: "Um app focado em bem-estar emocional dos jovens angolanos.",
  },
  {
    title: "Mapa das Oportunidades",
    autor: "Maria da Silva",
    data: "07/07/2025",
    description: "Plataforma que mostra empregos, bolsas e cursos em Angola.",
  },
]

router.get("/", (req, res) => {
    res.json(projetos)
})



export default router