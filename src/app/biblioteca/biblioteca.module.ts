import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { BibliotecaRoutingModule } from './biblioteca-routing.module';
import { LivroComponent } from './livro/livro.component';


@NgModule({
  declarations: [
    LivroComponent
  ],
  imports: [
    CommonModule,
    BibliotecaRoutingModule,
    AppMaterialModule
  ]
})
export class BibliotecaModule { }
