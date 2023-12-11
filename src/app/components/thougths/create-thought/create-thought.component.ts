import { Component } from '@angular/core';

@Component({
  selector: 'app-create-thought',
  templateUrl: './create-thought.component.html',
  styleUrls: ['./create-thought.component.css'],
})
export class CreateThoughtComponent {
  thought = {
    id: '1',
    content: 'aprendendo Angular',
    author: 'Dev',
    model: '',
  };

  createThougth() {
    alert('novo pensamento criado');
  }

  cancel() {
    alert('cancelado');
  }
}
