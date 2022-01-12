import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SidebarComponent } from '../core/components/sidebar/sidebar.component';
import { NavbarComponent } from '../core/components/navbar/navbar.component';
import { FooterComponent } from '../core/components/footer/footer.component';




@NgModule({
  declarations: [
    AdminComponent,
    SidebarComponent,
    NavbarComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
