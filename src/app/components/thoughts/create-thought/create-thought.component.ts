import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Thought } from 'src/app/interfaces/thoughts';
import { ThoughtsService } from 'src/app/services/thoughts.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-create-thought',
  templateUrl: './create-thought.component.html',
  styleUrls: ['./create-thought.component.css'],
})
export class CreateThoughtComponent {
  thought: Thought = {
    id: '',
    content: '',
    author: '',
    model: 'modelo1',
  };
  constructor(
    private thoughtService: ThoughtsService,
    private router: Router
  ) {}

  createThougth() {
    this.thought.id = uuidv4();
    this.thoughtService.createThought(this.thought).subscribe((result) => {
      console.log(result);
      this.router.navigate(['/listarPensamento']);
    });
  }

  cancel() {
    this.router.navigate(['/listarPensamento']);
  }
}
