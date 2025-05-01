import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Produto } from '../../../models/produto';

@Component({
  selector: 'app-cadastro-produto',
  imports: [FormsModule],
  templateUrl: './cadastro-produto.component.html',
  styleUrl: './cadastro-produto.component.css'
})
export class CadastroProdutoComponent {

proximoId: number = 0;

idParaEditar?: number;

nome: string = "";

categoria: string = "";

quantidade: number = 0;

preco: number = 0;

vencido: boolean = false;

estoque: number = 0;

produtos: Array<Produto> = [];

salvarProduto(){
  if(this.nome.length < 3){
    alert(" Nome deve conter no mínimo 3 caracteres")
    return;
  }

  if(this.nome.length > 30){
    alert("Nome deve conter no máximo 30 caracteres")
    return;
  }

  if(this.idParaEditar == undefined){
    this.cadastrarProduto();
  }else{
    this.editarProduto();
  }

  this.nome = "";
  this.categoria = "";
  
 

}

editarProduto(){
  let indiceProduto = this.produtos.findIndex(x => x.id == this.idParaEditar);
  this.produtos[indiceProduto].nome = this.nome;
  this.produtos[indiceProduto].categoria = this.categoria;
  this.produtos[indiceProduto].quantidade = this.quantidade;
  this.produtos[indiceProduto].preco = this.preco;
  this.produtos[indiceProduto].vencido = this.vencido;
  this.produtos[indiceProduto].estoque = this.estoque;

  this.idParaEditar = undefined;
}

cadastrarProduto(){
  this.proximoId++;
  let produto = new Produto(this.proximoId, this.nome, this.categoria, this.quantidade, this.preco, this.vencido, this.estoque,);
  this.produtos.push(produto);
}
apagar(produto: Produto){
  let comfirmacao =  confirm(`Deseja realmente apagar o produto'${produto.nome}'?`);
  let indiceProduto = this.produtos.findIndex(x => x.id == produto.id);
  this.produtos.splice(indiceProduto, 1) 
}
editar(produto: Produto){
  this.nome = produto.nome;
  this.idParaEditar = produto.id;
  this.categoria = produto.categoria;
  this.quantidade = produto.quantidade;
  this.preco = produto.preco;
  this.vencido = produto.vencido;
  this.estoque = produto.estoque;
}

}