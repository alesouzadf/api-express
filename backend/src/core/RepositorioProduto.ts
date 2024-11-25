import Produto from "./Produto";

export default class RepositorioProduto {
    itens: Produto[] = [
        new Produto("Iphone 16 256gb", 6500),
        new Produto("TV Samsung Ultra 52", 5300),
        new Produto("Ar Condicionado LG Inverter 9000 btu", 2500),
    ]

    obterTodos(){
        return this.itens
    }

    novo(nome: string, preco: number){
        const novoProduto = new Produto(nome, preco)
        this.itens.push(novoProduto)
    }

    obterPorCodigo(codigo: string){
        const produto = this.itens.find(produto=>produto.codigo === codigo)
        return produto
    }

    alterarPorCodigo(codigo: string,  nome?: string, preco?: number){
        const indice = this.itens.findIndex(p => p.codigo === codigo)
        if(indice >= 0 && indice < this.itens.length){
            if(nome){
                this.itens[indice].nome = nome
            }

            if(preco){
                this.itens[indice].preco = preco
            }
        }
    }
}