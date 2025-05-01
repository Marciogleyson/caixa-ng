import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Produto } from '../../../models/produto';

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
  categoria: string = "";
  produtos: Produto[] = [];
  mensagemErro: string = '';

  salvarProduto() {
    this.mensagemErro = ''; 

    const nomeValidationResult = this.validarNome(this.nome);
    if (nomeValidationResult) {
      this.mensagemErro = nomeValidationResult;
      return;
    }

    const categoriaValidationResult = this.validarCategoria(this.categoria);
    if (categoriaValidationResult) {
      this.mensagemErro = categoriaValidationResult;
      return;
    }

    if (this.idParaEditar === undefined) {
      this.cadastrarProduto();
    } else {
      this.editarProduto();
    }

    this.limparCampos();
  }

  private validarNome(nome: string): string | null {
    if (nome.trim().length < 3) {
      return 'Nome deve conter no mínimo 3 caracteres';
    }

    if (nome.length > 30) {
      return 'Nome deve conter no máximo 30 caracteres';
    }

    return null;
  }

  private validarCategoria(categoria: string): string | null {
    if (!categoria) {
      return 'Categoria é obrigatória';
    }
    return null;
  }

  private cadastrarProduto() {
    const novoProduto = new Produto(this.proximoId++, this.nome, this.categoria);
    this.produtos.push(novoProduto);
  }

  private editarProduto() {
    const indice = this.produtos.findIndex(p => p.id === this.idParaEditar);
    if (indice !== -1) {
      this.produtos[indice].nome = this.nome;
      this.produtos[indice].categoria = this.categoria;
    }
  }

  editar(produto: Produto) {
    this.idParaEditar = produto.id;
    this.nome = produto.nome;
    this.categoria = produto.categoria;
    this.mensagemErro = ''; 
  }

  apagar(produto: Produto) {
    if (confirm(`Deseja realmente apagar o produto '${produto.nome}'?`)) {
      const indice = this.produtos.findIndex(p => p.id === produto.id);
      this.produtos.splice(indice, 1);
    }
  }

  private limparCampos() {
    this.nome = '';
    this.categoria = '';
    this.idParaEditar = undefined;
  }
}
