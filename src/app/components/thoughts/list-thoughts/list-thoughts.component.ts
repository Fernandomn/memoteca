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
  hasMoreThoughts: boolean = true;
  filter: string = '';

  private currentPage = 1;
  private $onDestroy = new Subject<boolean>();
  private isListingFavorites: boolean = false;

  constructor(
    private thoughtService: ThoughtsService,
    private router: Router
  ) {}

  get listTitle(): string {
    return this.isListingFavorites ? 'Meus Favoritos' : 'Meu Mural';
  }

  ngOnInit(): void {
    this.loadMoreThougths();
  }

  ngOnDestroy(): void {
    this.$onDestroy.next(true);
    this.$onDestroy.complete();
  }

  getListFavorites() {
    this.isListingFavorites = !this.isListingFavorites;
    this.searchThoughts();
  }

  searchThoughts() {
    this.resetSearch();
    this.thoughtService
      .listThoughts(this.currentPage++, this.filter, this.isListingFavorites)
      .pipe(takeUntil(this.$onDestroy))
      .subscribe((resultListThoughts) => {
        this.listThoughts = [...resultListThoughts];
      });
  }

  loadMoreThougths() {
    this.thoughtService
      .listThoughts(this.currentPage++, this.filter, this.isListingFavorites)
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
    if (this.isListingFavorites && !thought.favorite) {
      this.listThoughts.splice(this.listThoughts.indexOf(thought), 1);
    }
  }

  private resetSearch() {
    this.hasMoreThoughts = true;
    this.currentPage = 1;
  }
}
