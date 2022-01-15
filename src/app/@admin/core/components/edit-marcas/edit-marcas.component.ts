import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { IMarca } from 'src/app/@core/models/marca.interfaces';
import { MarcaService } from 'src/app/@core/services/marca.service';
import { validateAllFormFields } from 'src/app/@core/utils/form';

@Component({
  selector: 'app-edit-marcas',
  templateUrl: './edit-marcas.component.html',
  styleUrls: ['./edit-marcas.component.scss']
})
export class EditMarcasComponent implements OnInit {
  marcas: IMarca;
  marcaId: number = 0;
  form: FormGroup;
  constructor(   
    private marcaService: MarcaService,
    public modal: NgbActiveModal,
    private formBuilder: FormBuilder,
    ) { 
      this.buildForm();
    }

  private buildForm() {
    this.form = this.formBuilder.group({
      nombre: ["", [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.marcaService.getMarcaById(this.marcaId).subscribe((data)=>{
      this.form.patchValue({
        nombre: data.nombre
      })
    })
  }

  edit(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      this.marcas = this.form.value;
      this.marcaService.putMarca(this.marcas, this.marcaId).subscribe((_) => {
        window.location.reload();
      });
    } else {
      validateAllFormFields(this.form);
    }
  }

}
