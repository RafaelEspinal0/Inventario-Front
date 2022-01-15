import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../../../@core/services/categoria.service';
import { ICategoria } from '../../../@core/models/categoria.interfaces';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { validateAllFormFields } from 'src/app/@core/utils/form';
import Swal from 'sweetalert2';
import { EditMarcasComponent } from '../../core/components/edit-marcas/edit-marcas.component';
import { EditCategoriasComponent } from '../../core/components/edit-categorias/edit-categorias.component';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss']
})
export class CategoriaComponent implements OnInit {

  form: FormGroup;
  CategoriaPost: Array<ICategoria> = [];
  categorias: Array<ICategoria>;

  constructor(
    public modal: NgbModal,
    private categoriaService:CategoriaService,
    private modalService: NgbModal,
    private formBuilder: FormBuilder

  ) {
    this.buildForm();
   }

  ngOnInit(): void {
    this.categoriaService.getAllCategorias().subscribe((data)=>{
      this.categorias = data;
    })
  }
  buildForm(){
    this.form = this.formBuilder.group({
      nombre: ["", [Validators.required]],
    });
  }

  save(event:Event){
    event.preventDefault()
    if(this.form.valid){
      this.CategoriaPost = this.form.value;
      this.categoriaService.postCategoria(this.CategoriaPost).subscribe((data)=>{
        window.location.reload();
      })
 
    }else{
      validateAllFormFields(this.form);
    }

  }
  
  editModal(id: number) {
    const ref = this.modalService.open(EditCategoriasComponent, {
      size: 'lg',
    });
    ref.componentInstance.categoriaId = id;
  }

  deleteCategoria(id: number) {
    Swal.fire({
      title: 'Deseas eliminar esta categoria ?',
      text: 'No hay vuelta atras !',
      icon: 'question',
      confirmButtonText: 'Eliminar !',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',

    }).then((result) => {
      if (result.isConfirmed) {
        this.categoriaService.deleteCategoriaById(id).subscribe((_) => {
          Swal.fire(
            'Eliminado!',
            'Categoria eliminada correctamente!.',
            'success'
          );
          this.categoriaService.getAllCategorias().subscribe((data)=>{
            this.categorias = data
          })
        });
      }
    });
  }

}
