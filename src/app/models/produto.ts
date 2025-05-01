export class Produto {
    id: number
    nome: string;
    categoria: string;
   
    constructor(id: number, nome: string, categoria: string){
       
        this.id = id;       
        this.nome = nome;
        this.categoria = categoria;
        
    }
}