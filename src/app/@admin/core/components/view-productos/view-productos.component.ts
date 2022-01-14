import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { IProducto } from 'src/app/@core/models/producto.interfaces';
import { ProductosService } from 'src/app/@core/services/productos.service';

@Component({
  selector: 'app-view-productos',
  templateUrl: './view-productos.component.html',
  styleUrls: ['./view-productos.component.scss']
})
export class ViewProductosComponent implements OnInit {
  productoId: number = 0;
  producto: IProducto | undefined;

  constructor(
    public modal: NgbActiveModal,
    private productoService: ProductosService
  ) {}

  ngOnInit(): void {
    this.productoService.getAllProductosById(this.productoId).subscribe((data)=>{
      this.producto = data
      console.log(this.producto);
    })
  }

}
