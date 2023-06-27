import { Component, OnInit } from '@angular/core';

import { Livro } from '../models/livro';

@Component({
  selector: 'app-livro',
  templateUrl: './livro.component.html',
  styleUrls: ['./livro.component.scss']
})
export class LivroComponent implements OnInit{

  livros: Livro[] = [
    {_id: '1', titulo: 'teste', numeroDePaginas: 100, nota: '10', ativo: true},
    {_id: '1', titulo: 'teste', numeroDePaginas: 100, nota: '10', ativo: true}
  ];
  displayedColumns = ['titulo','numeroDePaginas','nota','ativo'];

  constructor() {

  }

  ngOnInit(): void {
  }

}
