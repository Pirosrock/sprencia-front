import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActividadesService } from 'src/app/services/actividades.service';
import swall from 'sweetalert2';

@Component({
  selector: 'app-new-activity-form',
  templateUrl: './new-activity-form.component.html',
  styleUrls: ['./new-activity-form.component.css']
})
export class NewActivityFormComponent {

  formNewActivity: FormGroup;
  caracterDescription: number = 10;
  arrErrors: any;

  constructor(
    private router: Router,
    private actividadesServices: ActividadesService
  ) {
    this.formNewActivity = new FormGroup({
      nombre: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50)
      ]),
      precio: new FormControl('', [
        Validators.required,
        Validators.min(0)
      ]),
      resumen: new FormControl('', [
        Validators.required,
        Validators.minLength(this.caracterDescription)
      ]),
      estado: new FormControl('', [
        Validators.required
      ])
    })
  }

  async getDataForm(): Promise<any> {
    const nuevaActividad = this.formNewActivity.value
    if (nuevaActividad.estado === "true") {
      nuevaActividad.estado = true
    } else {
      nuevaActividad.estado = false
    }

    try {
      const response = await this.actividadesServices.PostNewActivity(nuevaActividad)
        if (response.id) {
          console.log(response)
              swall.fire({
                title: "Actividad introducida",
                text: `La actividad: ${nuevaActividad.nombre} ha sido actualizada correctamente`,
                icon: "success"
              });
        setTimeout(() => {
          //! 2 opciones, o te lleva a la lista de actividades o resetea el formulario para introducir otra actividad
          // this.formNewActivity.reset();        
          this.router.navigate(['/actividades'])            
          }, 3000)
     
        } else {
          console.log(response)
            this.arrErrors = response
        }

    } catch (err) {
      //! utilizar un aviso con sweetAlert
    }
    

    
  }

  checkControl(pControlName: string, pError: string): boolean {
    // Va a neceistar devolver un booleano porque el *ngIf en el html necesita un "true" o "false"
    if (this.formNewActivity.get(pControlName)?.hasError(pError) && this.formNewActivity.get(pControlName)?.touched) {
      return true;
    } else {
      return false;
    }
  }

}
