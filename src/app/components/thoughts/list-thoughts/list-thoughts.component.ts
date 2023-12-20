import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { Thought } from 'src/app/interfaces/thoughts';
import { ThoughtsService } from 'src/app/services/thoughts.service';

@Component({
  selector: 'app-list-thoughts',
  templateUrl: './list-thoughts.component.html',
  styleUrls: ['./list-thoughts.component.css'],
})
export class ListThoughtsComponent implements OnInit, OnDestroy {
  listThoughts: Thought[] = [];
  currentPage = 1;
  hasMoreThoughts: boolean = true;
  filter: string = '';
  shouldListFavorites: boolean = false;
  $onDestroy = new Subject<boolean>();

  constructor(
    private thoughtService: ThoughtsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadMoreThougths();
  }

  ngOnDestroy(): void {
    this.$onDestroy.next(true);
    this.$onDestroy.complete();
  }

  getListFavorites() {
    this.shouldListFavorites = !this.shouldListFavorites;
    this.searchThoughts();
  }

  searchThoughts() {
    this.resetSearch();
    this.thoughtService
      .listThoughts(this.currentPage++, this.filter, this.shouldListFavorites)
      .pipe(takeUntil(this.$onDestroy))
      .subscribe((resultListThoughts) => {
        this.listThoughts = [...resultListThoughts];
      });
  }

  loadMoreThougths() {
    this.thoughtService
      .listThoughts(this.currentPage++, this.filter, this.shouldListFavorites)
      .pipe(takeUntil(this.$onDestroy))
      .subscribe((resultListThoughts) => {
        this.listThoughts.push(...resultListThoughts);

        if (!resultListThoughts.length) {
          this.hasMoreThoughts = false;
        }
      });
  }

  reloadComponent(): void {
    this.router.navigate([this.router.url]);
  }

  onFavoriteUpdated(thought: Thought): void {
    if (this.shouldListFavorites && !thought.favorite) {
      this.listThoughts.splice(this.listThoughts.indexOf(thought), 1);
    }
  }

  private resetSearch() {
    this.hasMoreThoughts = true;
    this.currentPage = 1;
  }
}
