import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MarcaService } from 'src/app/@core/services/marca.service';
import { IMarca } from '../../../@core/models/marca.interfaces';
import { EditMarcasComponent } from '../../core/components/edit-marcas/edit-marcas.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-marca',
  templateUrl: './marca.component.html',
  styleUrls: ['./marca.component.scss']
})
export class MarcaComponent implements OnInit {
  public marcas: Array<IMarca> = [];
  constructor(
    private marcaService: MarcaService,
   private modalService: NgbModal,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.marcaService.getAllMarcas().subscribe((data)=>{
      this.marcas = data
    })
  }


  editModal(id: number) {
    const ref = this.modalService.open(EditMarcasComponent, {
      size: 'lg',
    });
    ref.componentInstance.marcaId = id;
  }

  deleteMarca(id: number) {
    Swal.fire({
      title: 'Deseas eliminar esta marca ?',
      text: 'No hay vuelta atras !',
      icon: 'question',
      confirmButtonText: 'Eliminar !',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',

    }).then((result) => {
      if (result.isConfirmed) {
        this.marcaService.deleteMarca(id).subscribe((_) => {
          Swal.fire(
            'Eliminado!',
            'Marca eliminada correctamente!.',
            'success'
          );
          this.marcaService.getAllMarcas().subscribe((data)=>{
            this.marcas = data
          })
        });
      }
    });
  }
}
