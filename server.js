import express from "express";

const app = express();

// rota raiz
app.get("/", (req, res) => {
  res.send("API SomDaVoz funcionando 🚀");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Servidor rodando na porta " + PORT);
});