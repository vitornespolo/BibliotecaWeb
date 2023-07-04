import { Component, OnInit } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';

import { Livro } from '../models/livro';
import { LivrosService } from '../services/livros.service';

@Component({
  selector: 'app-livro',
  templateUrl: './livro.component.html',
  styleUrls: ['./livro.component.scss']
})
export class LivroComponent implements OnInit {

  livros$: Observable<Livro[]>;
  displayedColumns = ['titulo','numeroDePaginas','nota','ativo'];

  //liveosService: LivrosService;

  constructor(private liveosService: LivrosService) {

    //this.liveosService = new LivrosService();
    this.livros$ = this.liveosService.list()
    .pipe(
      catchError(error => {
        return of([])
      }),
    );
  }

  ngOnInit(): void {

  }

}
