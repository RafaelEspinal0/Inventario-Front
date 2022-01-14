import { Component, OnInit } from '@angular/core';
import { ICategoria } from '../../../../@core/models/categoria.interfaces';
import { IProducto } from '../../../../@core/models/producto.interfaces';
import { IMarca } from '../../../../@core/models/marca.interfaces';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductosService } from '../../../../@core/services/productos.service';
import { MarcaService } from 'src/app/@core/services/marca.service';
import { CategoriaService } from 'src/app/@core/services/categoria.service';
import { validateAllFormFields } from 'src/app/@core/utils/form';

@Component({
  selector: 'app-edit-productos',
  templateUrl: './edit-productos.component.html',
  styleUrls: ['./edit-productos.component.scss']
})
export class EditProductosComponent implements OnInit {
  categorias: Array<ICategoria> = [];
  marcas: Array<IMarca> = [];
  form: FormGroup;
  producto: IProducto;
  productoId: number = 0;
  constructor(
    public modal: NgbActiveModal,
    private productoService: ProductosService,
    private marcaService: MarcaService,
    private categoriaService: CategoriaService,
    private formBuilder: FormBuilder
  ) {
    this.buildForm();
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      nombre: ["", [Validators.required]],
      descripcion: [""],
      cantidad: ["", [Validators.required]],
      precio: ["", [Validators.required]],
      categoria: ["", [Validators.required]],
      marca: ["", [Validators.required]],
    });
  }
  ngOnInit(): void {
    this.getAllCategorias();
    this.getAllMarcas();
    this.productoService.getAllProductosById(this.productoId).subscribe((data)=>{
      this.form.patchValue({
      nombre: data.nombre,
      descripcion: data.descripcion,
      cantidad: data.cantidad,
      precio: data.precio,
      categoria: data.categoria.id,
      marca: data.marca.id
      });
    })
  }

  
  getAllMarcas() {
    this.marcaService.getAllMarcas().subscribe((data) => {
      this.marcas = data;
    });
  }

  getAllCategorias() {
    this.categoriaService.getAllCategorias().subscribe((data) => {
      this.categorias = data;
    });
  }

  edit(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      this.producto = this.form.value;
      this.productoService.putProductos(this.producto, this.productoId).subscribe((_) => {
        window.location.reload();
      });
    } else {
      validateAllFormFields(this.form);
    }
  }
}
