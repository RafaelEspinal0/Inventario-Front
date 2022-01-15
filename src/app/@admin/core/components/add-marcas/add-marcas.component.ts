import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IMarca } from 'src/app/@core/models/marca.interfaces';
import { MarcaService } from 'src/app/@core/services/marca.service';
import { validateAllFormFields } from 'src/app/@core/utils/form';

@Component({
  selector: 'app-add-marcas',
  templateUrl: './add-marcas.component.html',
  styleUrls: ['./add-marcas.component.scss']
})
export class AddMarcasComponent implements OnInit {
  form: FormGroup;
  marcas: Array<IMarca> = [];
  constructor(
    public modal: NgbModal,
    private marcaService: MarcaService,
    private formBuilder: FormBuilder
  ) {
    this.buildForm()
   }

  ngOnInit(): void {
  }
  buildForm(){
    this.form = this.formBuilder.group({
      nombre: ["", [Validators.required]],
    });
  }

  save(event:Event){
    event.preventDefault()
    if(this.form.valid){
      this.marcas = this.form.value;
      this.marcaService.postMarca(this.marcas).subscribe((data)=>{
        window.location.reload();
      })
 
    }else{
      validateAllFormFields(this.form);
    }

  }
}
