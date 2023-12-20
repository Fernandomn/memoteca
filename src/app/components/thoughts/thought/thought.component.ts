import { Component, Input } from '@angular/core';
import { Thought } from 'src/app/interfaces/thoughts';
import { ThoughtsService } from 'src/app/services/thoughts.service';

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

  constructor(private thoughtService: ThoughtsService) {}

  thoughtLength(): string {
    return this.thought.content && this.thought.content.length >= 256
      ? 'pensamento-g'
      : 'pensamento-p';
  }

  changeFavoriteIcon(): string {
    return this.thought.favorite ? 'ativo' : 'inativo';
  }

  changeFavorite(): void {
    this.thoughtService.changeFavorite(this.thought).subscribe();
  }
}
