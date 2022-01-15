import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModule } from './@admin/pages/admin.module';
import { HttpClientModule } from '@angular/common/http';
import { PublicModule } from './@public/pages/public.module';
import { AddProductosComponent } from './@admin/core/components/add-productos/add-productos.component';
import { ViewProductosComponent } from './@admin/core/components/view-productos/view-productos.component';
import { EditProductosComponent } from './@admin/core/components/edit-productos/edit-productos.component';
import { AddMarcasComponent } from './@admin/core/components/add-marcas/add-marcas.component';
import { EditMarcasComponent } from './@admin/core/components/edit-marcas/edit-marcas.component';
import { EditCategoriasComponent } from './@admin/core/components/edit-categorias/edit-categorias.component';
import { AddCategoriasComponent } from './@admin/core/components/add-categorias/add-categorias.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewProductosComponent,
    EditProductosComponent,
    EditMarcasComponent,
    EditCategoriasComponent,
  ],
  imports: [
    BrowserModule,
    AdminModule,
    PublicModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
