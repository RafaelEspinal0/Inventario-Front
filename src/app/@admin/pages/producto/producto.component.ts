import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductosService } from '../../../@core/services/productos.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {

  public productos: Array<any> = [];
  constructor(
    private productoService: ProductosService,
    modalService: NgbModal,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.productoService.getAllProductos().subscribe((data)=>{
      this.productos = data
    })
  }

}
