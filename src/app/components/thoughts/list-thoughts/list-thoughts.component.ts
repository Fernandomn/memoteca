import { Component } from '@angular/core';
import { Thought } from 'src/app/interfaces/thoughts';

@Component({
  selector: 'app-list-thoughts',
  templateUrl: './list-thoughts.component.html',
  styleUrls: ['./list-thoughts.component.css'],
})
export class ListThoughtsComponent {
  listThoughts: Thought[] = [
    {
      content: 'Passo informações para o componente filho',
      author: 'Componente pai',
      model: 'modelo1',
    },
    {
      content: 'Minha propriedade é decorada com @Input()',
      author: 'Componente filho',
      model: 'modelo2',
    },
  ];
}
