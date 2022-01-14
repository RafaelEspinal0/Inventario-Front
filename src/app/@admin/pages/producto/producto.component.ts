import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductosService } from '../../../@core/services/productos.service';
import { ViewProductosComponent } from '../../core/components/view-productos/view-productos.component';

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

}
