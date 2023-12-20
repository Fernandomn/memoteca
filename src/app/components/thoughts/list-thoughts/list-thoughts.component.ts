import { Component, OnInit } from '@angular/core';
import { Thought } from 'src/app/interfaces/thoughts';
import { ThoughtsService } from 'src/app/services/thoughts.service';

@Component({
  selector: 'app-list-thoughts',
  templateUrl: './list-thoughts.component.html',
  styleUrls: ['./list-thoughts.component.css'],
})
export class ListThoughtsComponent implements OnInit {
  listThoughts: Thought[] = [];
  currentPage = 1;
  hasMoreThoughts: boolean = true;
  filter: string = '';

  constructor(private thoughtService: ThoughtsService) {}

  ngOnInit(): void {
    this.loadMoreThougths();
  }

  loadMoreThougths() {
    this.thoughtService
      .listThoughts(this.currentPage++)
      .subscribe((resultListThoughts) => {
        this.listThoughts.push(...resultListThoughts);

        if (!resultListThoughts.length) {
          this.hasMoreThoughts = false;
        }
      });
  }
}
