import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastro-produto',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.css']
})
export class CadastroProdutoComponent {
  proximoId: number = 1;
  idParaEditar?: number;
  nome: string = "";
  produtos: Produto[] = [];

  salvarProduto() {
    if (this.nome.trim().length < 3) {
      alert("Nome deve conter no mínimo 3 caracteres");
      return;
    }

    if (this.nome.length > 30) {
      alert("Nome deve conter no máximo 30 caracteres");
      return;
    }

    if (this.idParaEditar === undefined) {
      this.cadastrarProduto();
    } else {
      this.editarProduto();
    }

    this.nome = "";
    this.idParaEditar = undefined;
  }

  cadastrarProduto() {
    const novoProduto = new Produto(this.proximoId++, this.nome);
    this.produtos.push(novoProduto);
  }

  editarProduto() {
    const indice = this.produtos.findIndex(p => p.id === this.idParaEditar);
    if (indice !== -1) {
      this.produtos[indice].nome = this.nome;
    }
  }

  editar(produto: Produto) {
    this.idParaEditar = produto.id;
    this.nome = produto.nome;
  }

  apagar(produto: Produto) {
    if (confirm(`Deseja realmente apagar o produto '${produto.nome}'?`)) {
      const indice = this.produtos.findIndex(p => p.id === produto.id);
      this.produtos.splice(indice, 1);
    }
  }
}

class Produto {
  constructor(
    public id: number,
    public nome: string
  ) {}
}
