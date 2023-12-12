import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Thought } from '../interfaces/thoughts';

@Injectable({
  providedIn: 'root',
})
export class ThoughtsService {
  private readonly apiUrl = 'http://localhost:3030/pensamentos';

  constructor(private http: HttpClient) {}

  listQuotes() {
    return this.http.get<Thought[]>(this.apiUrl);
  }
}
