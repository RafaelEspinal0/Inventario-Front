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

@NgModule({
  declarations: [
    AppComponent,
    ViewProductosComponent,
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
