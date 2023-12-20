import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Thought } from '../interfaces/thoughts';

@Injectable({
  providedIn: 'root',
})
export class ThoughtsService {
  private readonly apiUrl = 'http://localhost:3030/pensamentos';

  constructor(private http: HttpClient) {}

  listThoughts(
    page: number = 1,
    filter: string,
    params = new HttpParams()
  ): Observable<Thought[]> {
    const itensPerPage = 6;
    params = params.set('_page', page).set('_limit', itensPerPage);

    if (filter.trim().length > 2) {
      params = params.set('q', filter);
    }

    return this.http.get<Thought[]>(this.apiUrl, { params });
  }

  getThoughtById(id: string): Observable<Thought> {
    const url = `${this.apiUrl}/${id}`;

    return this.http.get<Thought>(url);
  }

  createThought(thought: Thought): Observable<Thought> {
    return this.http.post<Thought>(this.apiUrl, thought);
  }

  editThought(thought: Thought): Observable<Thought> {
    const url = `${this.apiUrl}/${thought.id}`;

    return this.http.put<Thought>(url, thought);
  }

  deleteThougth(id: string): Observable<Thought> {
    const url = `${this.apiUrl}/${id}`;

    return this.http.delete<Thought>(url);
  }

  listFavoriteThougths(page: number, filter: string): Observable<Thought[]> {
    let params = new HttpParams().set('favorite', true);

    return this.listThoughts(page, filter, params);
  }

  changeFavoriteThought(thought: Thought): Observable<Thought> {
    thought.favorite = !thought.favorite;
    return this.editThought(thought);
  }
}
