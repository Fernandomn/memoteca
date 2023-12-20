import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Thought } from 'src/app/interfaces/thoughts';
import { ThoughtsService } from 'src/app/services/thoughts.service';
import { v4 as uuidv4 } from 'uuid';
import { lowCaseValidator } from '../lowCaseValidators';

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
    favorite: false,
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
      this.thoughtService.getThoughtById(id).subscribe((thought: Thought) => {
        this.thought = thought;
        this.createForm();
      });
    } else {
      this.createForm();
    }
  }

  private createForm() {
    this.form = this.formBuilder.group({
      content: [
        this.thought.content,
        Validators.compose([
          Validators.required,
          Validators.pattern(/(.|\s)*\S(.|\s)*/),
        ]),
      ],
      author: [
        this.thought.author,
        Validators.compose([
          Validators.required,
          Validators.minLength(2),
          lowCaseValidator,
        ]),
      ],
      model: [this.thought.model],
      favorite: [this.thought.favorite],
    });
  }

  thoughtActionClass(): string {
    return this.thought.id ? 'editar-pensamentos' : 'criar-pensamentos';
  }

  createThougth() {
    console.log(this.form.status);

    if (this.form.valid) {
      this.thoughtService
        .createThought({ ...this.form.value, id: uuidv4() })
        .subscribe((result) => {
          this.router.navigate(['/listarPensamento']);
        });
    }
  }

  editThougth() {
    this.thoughtService
      .editThought({ ...this.form.value, id: this.thought.id })
      .subscribe((result) => {
        this.router.navigate(['/listarPensamento']);
      });
  }

  cancel() {
    this.router.navigate(['/listarPensamento']);
  }

  enableButton(): string {
    return this.form.valid ? 'botao' : 'botao__desabilitado';
  }
}
