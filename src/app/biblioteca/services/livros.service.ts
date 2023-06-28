import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Livro } from '../models/livro';
import { take, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LivrosService {

  private readonly API = '/assets/livros.json'

  constructor(private httpClient: HttpClient) { }

  list() {

    return this.httpClient.get<Livro[]>(this.API)
    .pipe(
      take(1),
      tap(livros => console.log(livros))
    );
  }
}
