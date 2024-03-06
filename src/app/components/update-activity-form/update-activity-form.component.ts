import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { timeout } from 'rxjs';
import { Actividad } from 'src/app/interfaces/actividad.interface';
import { ActividadesService } from 'src/app/services/actividades.service';
import swall from 'sweetalert2'

@Component({
  selector: 'app-update-activity-form',
  templateUrl: './update-activity-form.component.html',
  styleUrls: ['./update-activity-form.component.css']
})
export class UpdateActivityFormComponent implements OnInit {

  
  updateActivityForm: FormGroup;
  caracterDescription: number = 10;
  arrErrors: any;
  activity!: Actividad;


  constructor(
    private actividadesServices: ActividadesService,
    private activatedRoute: ActivatedRoute,
    private router : Router
  ) {    
      this.updateActivityForm = new FormGroup({
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
    async ngOnInit(): Promise<any> {
    this.activatedRoute.params.subscribe(async (params: any) =>  {
      let id = parseInt(params.idactividad)
      try {
        let response = await this.actividadesServices.getActivityByID(id)
        if (response) {
          this.activity = response
          console.log(this.activity.id)
          this.updateActivityForm.patchValue({
            nombre: this.activity.nombre,
            precio: this.activity.precio,
            resumen: this.activity.resumen,
            estado: this.activity.estado
          })
        } else {
          this.router.navigate(['/actividades'])
        }
 
      } catch (err: any) {
        console.log(err.message)
      }
    })

    }
  
  async getDataForm(): Promise<any> {
 
    
    const updateActividad = this.updateActivityForm.value
    console.log(updateActividad)
    if (updateActividad.estado === "true") {
      updateActividad.estado = true
    } else {
      updateActividad.estado = false
    }
    
    console.log(updateActividad)
    try {
      const response = await this.actividadesServices.updateActivity(updateActividad, this.activity.id)
      if (response) {
          swall.fire({
                title: "Actividad Actualizada",
                text: `La actividad: ${this.activity.nombre} ha sido actualizada correctamente`,
                icon: "success"
              });
        setTimeout(() => {
          this.router.navigate(['/actividades'])            
          }, 3000)
        } else {
          console.log(response)
            this.arrErrors = response
        }
    } catch (err:any) {
      console.error(err.message)
    }
    
  }  
  
  checkControl(pControlName: string, pError: string): boolean {
    // Va a neceistar devolver un booleano porque el *ngIf en el html necesita un "true" o "false"
    if (this.updateActivityForm.get(pControlName)?.hasError(pError) && this.updateActivityForm.get(pControlName)?.touched) {
      return true;
    } else {
      return false;
    }
  }

}
