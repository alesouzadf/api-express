import Id from "../shared/Id"

export default class Produto {
    codigo: String
    nome: String
    preco: number

    constructor(nome: string, preco: number){
        this.nome = nome
        this.preco = preco
        this.codigo = Id.novo()
    }
}