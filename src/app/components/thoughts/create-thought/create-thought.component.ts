import { Component } from '@angular/core';
import { Thought } from 'src/app/interfaces/thoughts';

@Component({
  selector: 'app-create-thought',
  templateUrl: './create-thought.component.html',
  styleUrls: ['./create-thought.component.css'],
})
export class CreateThoughtComponent {
  thought: Thought = {
    id: 1,
    content: 'aprendendo Angular',
    author: 'Dev',
    model: 'modelo1',
  };

  createThougth() {
    alert('novo pensamento criado');
  }

  cancel() {
    alert('cancelado');
  }
}
