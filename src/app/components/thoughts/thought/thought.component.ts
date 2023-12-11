import { Component } from '@angular/core';
import { Thought } from 'src/app/interfaces/thoughts';

@Component({
  selector: 'app-thought',
  templateUrl: './thought.component.html',
  styleUrls: ['./thought.component.css'],
})
export class ThoughtComponent {
  thought: Thought = {
    content: 'I love Angular',
    author: 'Nay',
    model: 'modelo3',
  };
}
