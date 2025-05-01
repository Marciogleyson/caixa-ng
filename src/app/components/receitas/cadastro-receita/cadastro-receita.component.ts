import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Receita } from '../../../models/receita';


@Component({
  selector: 'app-cadastro-receita',
  imports: [FormsModule],   // quando usar ngModulo tem que usar o import
  templateUrl: './cadastro-receita.component.html',
  styleUrl: './cadastro-receita.component.css'
})
export class CadastroReceitaComponent {
  // Toda vez que utilizar [{ngModel}] é obrigatório importar FormsModule
  // ngModel é a forma que fazemos a ligação de algum campo com uma variável
  proximoId: number = 0;

    // idParaEditar é uma variável do tipo number que é nulllabel, ou seja, ela pode ou n ter valor
  idParaEditar?: number
  nome: string = "";
  valor: number = 0;
  receitas: Array<Receita> = []

  salvarReceita(){
    if(this.nome.length < 3 ){
      alert("Nome deve conter no mínimo 3 caracteres")
      return;
    }

    if(this.nome.length > 30 ){
      alert("Nome deve conter no mínimo 100 caracteres")
      return;
    }

    let valor = parseFloat(this.valor.toString().replace(",", "."));
    //NaN é not a number, é recebido naN quando o valor é tentado converter para float
    // não é um float válido
    if(Number.isNaN(valor)){
      alert("Valor dee ser um número real");
      return;
    }

    if (valor <= 0){
      alert("Valor deve ser maior que R$ 0,00")
      return;
    }
    console.log(valor)
    alert("")

    if (this.idParaEditar == undefined){
      this.cadastrarReceita();
    }else {
      this.editarReceita();
    }
  

    this.nome = "";
    this.valor = 0;
    // alert(this.nome);
  }

  editarReceita(){
    let indiceReceita = this.receitas.findIndex(x => x.id == this.idParaEditar);
    this.receitas[indiceReceita].nome = this.nome;
    this.receitas[indiceReceita].valor = this.valor;
  }

  cadastrarReceita(){
    this.proximoId++;
    let receita = new Receita(1, this.nome, this.valor);
    

    // como adicionar um elemento em uma lista de string em ts
    this.receitas.push(receita);
  }

  apagar(receita: Receita){
    let confirmacao = confirm(`Deseja realmente apagar a receita'${receita.nome}'?`)
    // Buscando o indice da receita filtrando por id da receita que foi selecionada
    let indiceReceita = this.receitas.findIndex(x => x.id == receita.id)
    // Removendo a receita da lista receita utilizando o indice, removendo 1 elemento da lista
    this.receitas.splice(indiceReceita, 1);
  }

  editar(receita: Receita){
    this.nome = receita.nome;
    this.valor = receita.valor;
    this.idParaEditar = receita.id;
  }
}


