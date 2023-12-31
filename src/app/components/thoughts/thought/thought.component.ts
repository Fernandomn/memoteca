import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Thought } from 'src/app/interfaces/thoughts';

@Component({
  selector: 'app-thought',
  templateUrl: './thought.component.html',
  styleUrls: ['./thought.component.css'],
})
export class ThoughtComponent {
  @Input() thought: Thought = {
    id: '',
    content: 'I love Angular',
    author: 'Nay',
    model: 'modelo3',
    favorite: false,
  };

  @Output() favoriteUpdated = new EventEmitter();

  constructor() {}

  thoughtLength(): string {
    return this.thought.content && this.thought.content.length >= 256
      ? 'pensamento-g'
      : 'pensamento-p';
  }

  changeFavoriteIcon(): string {
    return this.thought.favorite ? 'ativo' : 'inativo';
  }

  updateFavorite(): void {
    this.favoriteUpdated.emit(this.thought);
  }
}
