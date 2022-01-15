import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarcaRoutingModule } from './marca-routing.module';
import { MarcaComponent } from './marca.component';
import { AddMarcasComponent } from '../../core/components/add-marcas/add-marcas.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MarcaComponent,
    AddMarcasComponent
  ],
  imports: [
    CommonModule,
    MarcaRoutingModule,
    NgbModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class MarcaModule { }
