import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from 'src/app/@core/guards/admin.guard';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    canActivateChild: [AdminGuard],
    children: [

      {
        path: '',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'productos',
        loadChildren: () => import('./producto/producto.module').then(m => m.ProductoModule)
      },
      {
        path: 'categorias',
        loadChildren: () => import('./categoria/categoria.module').then(m => m.CategoriaModule)
      },
      {
        path: 'marcas',
        loadChildren: () => import('./marca/marca.module').then(m => m.MarcaModule)
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
