import { Router } from "express";

const router = Router();
const projects = [
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
];

router.get("/", (req, res) => {
  res.json(projects);
});

// routa para cadastrar projetos

router.post("/", (req, res) => {
  const newProject = req.body;
  projects.push(newProject);
  res.status(201).json({ message: "Projeto cadastrado com sucesso" });
});
export default router;
