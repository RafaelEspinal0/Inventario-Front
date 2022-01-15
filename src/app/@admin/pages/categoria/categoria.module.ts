import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriaRoutingModule } from './categoria-routing.module';
import { CategoriaComponent } from './categoria.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddCategoriasComponent } from '../../core/components/add-categorias/add-categorias.component';


@NgModule({
  declarations: [
    CategoriaComponent,
    AddCategoriasComponent
  ],
  imports: [
    CommonModule,
    CategoriaRoutingModule,
    NgbModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class CategoriaModule { }
