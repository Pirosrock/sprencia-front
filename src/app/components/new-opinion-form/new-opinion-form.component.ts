import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as dayjs from 'dayjs';
import { OpinionesService } from 'src/app/services/opiniones.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-new-opinion-form',
  templateUrl: './new-opinion-form.component.html',
  styleUrls: ['./new-opinion-form.component.css']
})
export class NewOpinionFormComponent implements OnInit {

  @Input() actividadId!: number;
  formNewOpinion: FormGroup;
  textoMinimo: number = 10;

  constructor(
    private opinionesServices : OpinionesService
  ) { 
      this.formNewOpinion = new FormGroup({
      texto: new FormControl('', [
        Validators.required,
        Validators.minLength(this.textoMinimo)
      ]),
      fecha: new FormControl( dayjs().format('YYYY-MM-DD'), []),
      actividadId: new FormControl('', [])
    })
  }
  
  ngOnInit(): void {
    this.formNewOpinion.patchValue({
      actividadId: this.actividadId
    })  
  }


  async OnSubmit() {
    try {
      const nuevaOpinion = {
        texto: this.formNewOpinion.value.texto,
        fecha: this.formNewOpinion.value.fecha,
        actividadId: parseInt(this.formNewOpinion.value.actividadId)
      }
      await this.opinionesServices.postNewOpinion(nuevaOpinion)
      window.location.reload()
    } catch (err) {
      Swal.fire({
        title: 'No has escrito nada!!!',
        text: 'Debe poner alguna opinión',
        icon: 'error'
      })
    }
    
  }
  



}
