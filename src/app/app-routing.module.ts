import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: "", pathMatch:'full', redirectTo: 'biblioteca' },
  {
    path: 'biblioteca',
    loadChildren: () => import('./biblioteca/biblioteca.module').then(m => m.BibliotecaModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
