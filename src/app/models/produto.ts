export class Produto{
    id: number;
    nome: string;
    categoria: string;
    quantidade: number;
    preco: number;
    vencido: boolean;
    estoque: number;
    constructor(id: number, nome: string, categoria: string, quantidade: number, preco: number, vencido: boolean, estoque: number,){
        this.id = id;
        this.nome = nome;
        this.categoria = categoria;
        this.quantidade = quantidade;
        this.preco = preco;
        this.vencido = vencido;
        this.estoque = estoque;
        
    }
}