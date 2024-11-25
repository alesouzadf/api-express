import express from "express";
import cors from 'cors'
import rotaProdutos from "./routes/produtos"

const app = express();
const porta = 4000;

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())
app.use("/produtos", rotaProdutos)

app.listen(porta, () => {
    console.log(`rodando na porta ${porta}`);
});
