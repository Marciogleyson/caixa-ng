import { Component } from '@angular/core';
import { EstoqueCadastroComponent } from "../estoque-cadastro/estoque-cadastro.component";

@Component({
  selector: 'app-estoque',
  imports: [EstoqueCadastroComponent],
  templateUrl: './estoque.component.html',
  styleUrl: './estoque.component.css'
})
export class EstoqueComponent {

}
