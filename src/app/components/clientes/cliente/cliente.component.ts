import { Component } from '@angular/core';
import { ClienteCadastroComponent } from "../cliente-cadastro/cliente-cadastro.component";
import { Cliente } from '../../../models/cliente';

@Component({
  selector: 'app-cliente',
  imports: [ClienteCadastroComponent],
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.css'
})
export class ClienteComponent {

  clientes : Array<Cliente> = [];
  idAtual: number = 0

  // evento que utilizaremos para preencher os campos na tela e posteriormente salvar
  cliente: Cliente;

  constructor(){
    this.cliente = new Cliente();
  }

  // evento que é executado quando o componente é instanciado
  ngOnInit(){
    this.carregarClientesDoLocalStorage();
  }

  registrarClienteSalvo(){
    if (this.cliente.id === 0)
    this.cadastrar();
    else
    this.editar();

    this.cliente = new Cliente();
    this.salvarEmLocalStorage();
  }

  private editar(){
    let indiceCliente = this.clientes.findIndex(x => x.id == this.cliente.id);
    this.clientes[indiceCliente].nome = this.cliente.nome;
  }

  private cadastrar() {
    this.idAtual++;

    // Adicionando este objeto na lista de cliente
    this.clientes.push(this.cliente);
  }

  salvarEmLocalStorage(){
    // this.cliente é uma lista de objetos da class clientes
    // JSON.stringify é uma função para converter a listas/objetos para string no formato JSON
    const clientesString = JSON.stringify(this.clientes);
    // Armazena utilizando a chave 'cliente' a string com a lista de cliente
    localStorage.setItem("clientes", clientesString);
  }

  carregarClientesDoLocalStorage(){
    // Obter do localStorage(armazenamento no navegador) utilizando a chave cliente
    const clientesString = localStorage.getItem("clientes");
    // Verifica senão existe a lista de clientes no LOcalStorage
    if (clientesString === null)
      // Encerra a execução da função, pois não existe lista armazenada
    return;
    // Converte a String (JSON) para lsta de objetos
    this.clientes = JSON.parse(clientesString);
    // Percorre cada um dos clientes para atualizar o idAtual co  maior id dos clientes cadastrados
    Array.from(this.clientes).forEach(cliente => {
      if (cliente.id > this.idAtual){
        this.idAtual = cliente.id
      }
    });
  }

  apagar(cliente: Cliente){
    let confirmacao = confirm(`Deseja realmente apagar o cliente'${cliente.nome}'`);
    if(confirmacao !== true)
      return;

    let indicecliente = this.clientes.findIndex(x => x.id == cliente.id);
    this.clientes.splice(indicecliente, 1);

    this.salvarEmLocalStorage();
  }

  preencherCamposParaEditar(cliente: Cliente){
    this.cliente = cliente;
  }

  
}
