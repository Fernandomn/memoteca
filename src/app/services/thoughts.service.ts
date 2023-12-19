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

  listThoughts(page: number = 1): Observable<Thought[]> {
    //GET /posts?_page=7&_limit=20
    const itensPerPage = 6;
    let params = new HttpParams().set('_set', page).set('_limit', itensPerPage);

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
}
