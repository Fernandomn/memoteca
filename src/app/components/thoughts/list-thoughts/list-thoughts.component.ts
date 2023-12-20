import { Component, OnDestroy, OnInit } from '@angular/core';
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
  $onDestroy = new Subject<boolean>();

  constructor(private thoughtService: ThoughtsService) {}

  ngOnInit(): void {
    this.loadMoreThougths();
  }

  ngOnDestroy(): void {
    this.$onDestroy.next(true);
    this.$onDestroy.complete();
  }

  searchThoughts() {
    this.resetSearch();
    this.thoughtService
      .listThoughts(this.currentPage++, this.filter)
      .pipe(takeUntil(this.$onDestroy))
      .subscribe((resultListThoughts) => {
        this.listThoughts = resultListThoughts;
      });
  }

  loadMoreThougths() {
    this.thoughtService
      .listThoughts(this.currentPage++, this.filter)
      .pipe(takeUntil(this.$onDestroy))

      .subscribe((resultListThoughts) => {
        this.listThoughts.push(...resultListThoughts);

        if (!resultListThoughts.length) {
          this.hasMoreThoughts = false;
        }
      });
  }

  listFavorites() {
    this.resetSearch();
    this.thoughtService
      .listFavoriteThougths(this.currentPage, this.filter)
      .pipe(takeUntil(this.$onDestroy))
      .subscribe(
        (listFavoriteThoughts) => (this.listThoughts = listFavoriteThoughts)
      );
  }

  private resetSearch() {
    this.hasMoreThoughts = true;
    this.currentPage = 1;
  }
}
