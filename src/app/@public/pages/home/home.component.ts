import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ViewProductosComponent } from 'src/app/@admin/core/components/view-productos/view-productos.component';
import { ICategoria } from '../../../@core/models/categoria.interfaces';
import { CategoriaService } from '../../../@core/services/categoria.service';
import { ProductosService } from '../../../@core/services/productos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  categorias: Array<ICategoria>
  productos: Array<any> = [];
  constructor(
    private categoriaService: CategoriaService,
    private modalService: NgbModal,
    private productoService: ProductosService

  ) { }

  ngOnInit(): void {
    this.categoriaService.getAllCategorias().subscribe((data)=>{
      this.categorias = data
    })
    
    console.log(this.productos.length)
   
  }

  getProductos(value:any){
    this.productoService.getAllProductosByCategoria(value).subscribe((data)=>{
      this.productos = data
      console.log(this.productos)
    })
  }

  viewModal(id: number) {
    // console.log(id);
    const ref = this.modalService.open(ViewProductosComponent, {
      size: 'lg',
    });
    ref.componentInstance.productoId = id;
    ref.result.then(
      (yes) => {
        console.log(yes);
      },
      (cancel) => {
        console.log(cancel);
      }
    );
  }

}
