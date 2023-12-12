import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Thought } from '../interfaces/thoughts';

@Injectable({
  providedIn: 'root',
})
export class ThoughtsService {
  private readonly apiUrl = 'http://localhost:3030/pensamentos';

  constructor(private http: HttpClient) {}

  listQuotes(): Observable<Thought[]> {
    return this.http.get<Thought[]>(this.apiUrl);
  }

  createThought(thought: Thought): Observable<Thought> {
    return this.http.post<Thought>(this.apiUrl, thought);
  }
}
