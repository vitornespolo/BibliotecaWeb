import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, tap } from 'rxjs';

import { Livro } from '../models/livro';

@Injectable({
  providedIn: 'root'
})
export class LivrosService {

  private readonly API = '/assets/livros.json'

  constructor(private httpClient: HttpClient) { }

  list() {

    return this.httpClient.get<Livro[]>(this.API)
    .pipe(
      first(),
      delay(5000),
      tap(livros => console.log(livros))
    );
  }
}
