import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Thought } from 'src/app/interfaces/thoughts';
import { ThoughtsService } from 'src/app/services/thoughts.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-thought-form',
  templateUrl: './thought-form.component.html',
  styleUrls: ['./thought-form.component.css'],
})
export class ThoughtFormComponent implements OnInit {
  thought: Thought = {
    id: '',
    content: '',
    author: '',
    model: 'modelo1',
  };

  constructor(
    private thoughtService: ThoughtsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.thoughtService
        .getThoughtById(id)
        .subscribe((thought: Thought) => (this.thought = thought));
    }
  }

  thoughtActionClass(): string {
    if (this.thought.id) {
      return 'editar-pensamentos';
    }
    return 'criar-pensamentos';
  }

  createThougth() {
    this.thought.id = uuidv4();
    this.thoughtService.createThought(this.thought).subscribe((result) => {
      console.log(result);
      this.router.navigate(['/listarPensamento']);
    });
  }

  editThougth() {
    this.thoughtService.editThought(this.thought).subscribe((result) => {
      console.log(result);
      this.router.navigate(['/listarPensamento']);
    });
  }

  cancel() {
    this.router.navigate(['/listarPensamento']);
  }
}
