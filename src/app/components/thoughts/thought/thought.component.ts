import { Component, Input } from '@angular/core';
import { Thought } from 'src/app/interfaces/thoughts';

@Component({
  selector: 'app-thought',
  templateUrl: './thought.component.html',
  styleUrls: ['./thought.component.css'],
})
export class ThoughtComponent {
  @Input() thought: Thought = {
    content: 'I love Angular',
    author: 'Nay',
    model: 'modelo3',
  };

  constructor() {}

  thoughtLength(): string {
    if (this.thought.content && this.thought.content.length >= 256) {
      return 'pensamento-g';
    }
    return 'pensamento-p';
  }
}
