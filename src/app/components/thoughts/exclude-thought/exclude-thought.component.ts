import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Thought } from 'src/app/interfaces/thoughts';
import { ThoughtsService } from 'src/app/services/thoughts.service';

@Component({
  selector: 'app-exclude-thought',
  templateUrl: './exclude-thought.component.html',
  styleUrls: ['./exclude-thought.component.css'],
})
export class ExcludeThoughtComponent implements OnInit {
  thought: Thought = { id: '', content: '', author: '', model: 'modelo1' };

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

  excludeThought() {
    this.thoughtService
      .deleteThougth(this.thought.id)
      .subscribe(() => this.router.navigate(['/']));
  }

  cancel() {
    this.router.navigate(['/']);
  }
}
