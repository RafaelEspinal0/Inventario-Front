import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductosService } from '../../../../@core/services/productos.service';

@Component({
  selector: 'app-add-productos',
  templateUrl: './add-productos.component.html',
  styleUrls: ['./add-productos.component.scss']
})
export class AddProductosComponent implements OnInit {

  
  form: FormGroup;
  private point: any;
  constructor( 
    public modal: NgbModal,
    private productoService: ProductosService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    
  }
  buildForm(){
    this.form = this.formBuilder.group({
      nombre: ["", [Validators.required]],
      
    })
  }

}
