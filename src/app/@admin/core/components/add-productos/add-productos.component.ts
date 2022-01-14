import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ICategoria } from 'src/app/@core/models/categoria.interfaces';
import { IMarca } from 'src/app/@core/models/marca.interfaces';
import { IProducto } from 'src/app/@core/models/producto.interfaces';
import { CategoriaService } from 'src/app/@core/services/categoria.service';
import { FileService } from 'src/app/@core/services/file.service';
import { MarcaService } from 'src/app/@core/services/marca.service';
import { validateAllFormFields } from 'src/app/@core/utils/form';
import { ProductosService } from '../../../../@core/services/productos.service';

@Component({
  selector: 'app-add-productos',
  templateUrl: './add-productos.component.html',
  styleUrls: ['./add-productos.component.scss']
})
export class AddProductosComponent implements OnInit {

  
  form: FormGroup;
  productos: Array<IProducto> = [];
  categorias: Array<ICategoria> = [];
  marcas: Array<IMarca> = [];
  uploadedFiles: Array<File> = null;
  constructor( 
    public modal: NgbModal,
    private productoService: ProductosService,
    private marcaService: MarcaService,
    private categoriaService: CategoriaService,
    private formBuilder: FormBuilder,
    private fileService: FileService
  ) {
    this.buildForm();
   }

  ngOnInit(): void {
    this.getAllCategorias();
    this.getAllMarcas();
  }

  buildForm(){
    this.form = this.formBuilder.group({
      nombre: ["", [Validators.required]],
      descripcion: [""],
      cantidad: ["", [Validators.required]],
      precio: ["", [Validators.required]],
      categoria: ["", [Validators.required]],
      marca: ["", [Validators.required]],
    });
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

  save(event:Event){
    event.preventDefault()
    if(this.form.valid){
      this.productos = this.form.value;
      this.productoService.postProductos(this.productos).subscribe((data)=>{
        window.location.reload();
      })
 
    }else{
      validateAllFormFields(this.form);
    }

    // const formData: FormData = new FormData();
    // for (let i = 0; i < this.uploadedFiles.length; i++) {
    //   formData.append(
    //     'foto',
    //     this.uploadedFiles[i],
    //     this.uploadedFiles[i].name
    //   );
    // }
    // this.fileService.uploadFiles(formData).subscribe((data) => {
    //   this.modal.dismissAll();
    //   location.reload();
    // });

  }

  onFileChange(event) {
    this.uploadedFiles = event.target.files;
  }

}
