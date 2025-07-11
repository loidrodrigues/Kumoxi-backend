import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import projectRoutes from "./routes/project.routes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api", (req, res) => {
  res.json({ message: "API  Kumoxi online" });
});

// rotas dos projetos
app.use("/api/projects", projectRoutes);
app.use("/api/projects", projectRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Servidor Rodando na porta", PORT);
});
