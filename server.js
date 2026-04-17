import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());

const key = process.env.AZURE_KEY; // 🔐 seguro
const region = "brazilsouth";

app.get("/token", async (req, res) => {
    try {
        const response = await fetch(
            `https://${region}.api.cognitive.microsoft.com/sts/v1.0/issueToken`,
            {
                method: "POST",
                headers: {
                    "Ocp-Apim-Subscription-Key": key
                }
            }
        );

        const token = await response.text();
        res.json({ token, region });

    } catch (err) {
        res.status(500).send("Erro ao gerar token");
    }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log("Servidor rodando"));