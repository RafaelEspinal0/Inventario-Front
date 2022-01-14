import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductosService } from '../../../../@core/services/productos.service';

@Component({
  selector: 'app-add-productos',
  templateUrl: './add-productos.component.html',
  styleUrls: ['./add-productos.component.scss']
})
export class AddProductosComponent implements OnInit {

  constructor( 
    public modal: NgbModal,
    private productoService: ProductosService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
  }

}
