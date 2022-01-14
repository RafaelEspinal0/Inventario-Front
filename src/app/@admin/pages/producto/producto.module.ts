import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoRoutingModule } from './producto-routing.module';
import { ProductoComponent } from './producto.component';
import { AddProductosComponent } from '../../core/components/add-productos/add-productos.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProductoComponent,
    AddProductosComponent
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule,
    NgbModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class ProductoModule { }
