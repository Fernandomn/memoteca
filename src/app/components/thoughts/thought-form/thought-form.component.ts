import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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

  form!: FormGroup;

  constructor(
    private thoughtService: ThoughtsService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.thoughtService
        .getThoughtById(id)
        .subscribe((thought: Thought) => (this.thought = thought));
    }

    this.form = this.formBuilder.group({
      content: ['Formulário Reativo'],
      author: [''],
      model: ['modelo1'],
    });
  }

  thoughtActionClass(): string {
    return this.thought.id ? 'editar-pensamentos' : 'criar-pensamentos';
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
