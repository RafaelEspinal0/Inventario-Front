import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { validateAllFormFields } from 'src/app/@core/utils/form';
import { ICategoria } from '../../../../@core/models/categoria.interfaces';
import { CategoriaService } from '../../../../@core/services/categoria.service';

@Component({
  selector: 'app-edit-categorias',
  templateUrl: './edit-categorias.component.html',
  styleUrls: ['./edit-categorias.component.scss']
})
export class EditCategoriasComponent implements OnInit {
  categorias: ICategoria;
  categoriaId: number = 0;
  form: FormGroup;
  constructor(
    private categoriaService: CategoriaService,
    public modal: NgbActiveModal,
    private formBuilder: FormBuilder,
  ) {
    this.buildForm();
   }

  ngOnInit(): void {
    this.categoriaService.getCategoriaById(this.categoriaId).subscribe((data)=>{
      this.form.patchValue({
        nombre: data.nombre
      })
    })
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      nombre: ["", [Validators.required]],
    });
  }

  edit(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      this.categorias = this.form.value;
      this.categoriaService.putCategoria(this.categorias, this.categoriaId).subscribe((_) => {
        window.location.reload();
      });
    } else {
      validateAllFormFields(this.form);
    }
  }


}
