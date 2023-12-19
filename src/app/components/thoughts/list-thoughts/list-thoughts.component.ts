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

  constructor(private thoughtService: ThoughtsService) {}

  ngOnInit(): void {
    this.thoughtService
      .listThoughts(this.currentPage)
      .subscribe((listThoughts) => {
        this.listThoughts = listThoughts;
      });
  }
}
