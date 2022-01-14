import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductosService } from '../../../@core/services/productos.service';
import { ViewProductosComponent } from '../../core/components/view-productos/view-productos.component';
import { EditProductosComponent } from '../../core/components/edit-productos/edit-productos.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {

  public productos: Array<any> = [];
  constructor(
    private productoService: ProductosService,
   private modalService: NgbModal,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.productoService.getAllProductos().subscribe((data)=>{
      this.productos = data
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

  editModal(id: number) {
    const ref = this.modalService.open(EditProductosComponent, {
      size: 'lg',
    });
    ref.componentInstance.productoId = id;
  }

  deleteProducto(id: number) {
    Swal.fire({
      title: 'Deseas eliminar este producto ?',
      text: 'No hay vuelta atras !',
      icon: 'question',
      confirmButtonText: 'Eliminar !',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',

    }).then((result) => {
      if (result.isConfirmed) {
        this.productoService.deleteProductoById(id).subscribe((_) => {
          Swal.fire(
            'Eliminado!',
            'producto eliminado correctamente!.',
            'success'
          );
          this.productoService.getAllProductos().subscribe((data)=>{
            this.productos = data
          })
        });
      }
    });
  }

}
