import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CategoriaService } from '../../../../@core/services/categoria.service';

@Component({
  selector: 'app-add-categorias',
  templateUrl: './add-categorias.component.html',
  styleUrls: ['./add-categorias.component.scss']
})
export class AddCategoriasComponent implements OnInit {

  constructor(
    public modal: NgbModal,
    private categoriaService:CategoriaService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
  }

}
