import { Routes } from '@angular/router';
import { CadastroProdutoComponent } from './components/produtos/cadastro-produto/cadastro-produto.component';
import { CadastroReceitaComponent } from './components/receitas/cadastro-receita/cadastro-receita.component';
import { ClienteComponent } from './components/clientes/cliente/cliente.component';
import { EstoqueCadastroComponent } from './components/estoque/estoque-cadastro/estoque-cadastro.component';
import { EstoqueComponent } from './components/estoque/estoque/estoque.component';

export const routes: Routes = [
    {path: "clientes", component: ClienteComponent},
    {path: "produtos", component: CadastroProdutoComponent},
    {path: "receitas", component: CadastroReceitaComponent},
    {path: "estoque", component: EstoqueComponent}
];
