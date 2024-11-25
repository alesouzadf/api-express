import { Router } from "express";
import RepositorioProduto from "../core/RepositorioProduto";

const repo = new RepositorioProduto()
const router = Router();

router.get("/", (req, res)=> {
    res.status(200).send(repo.obterTodos())
})

router.post("/", (req, res)=> {
    const { nome, preco } = req.body
    repo.novo(nome, preco)
    res.status(201).send()
})

router.get("/:codigo", (req, res)=> {
    const produto = repo.obterPorCodigo(req.params.codigo)
    if(produto){
        res.status(200).send(produto)
    } else {
        res.sendStatus(204)
    }
})

router.put("/:codigo", (req, res)=> {
    const codigo = req.params.codigo
    const { nome, preco } = req.body
    repo.alterarPorCodigo(codigo, nome, preco)
    res.sendStatus(200)
})

export default router