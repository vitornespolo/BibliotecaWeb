import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LivroComponent } from './livro/livro.component';

const routes: Routes = [
  { path: "", component: LivroComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BibliotecaRoutingModule { }
