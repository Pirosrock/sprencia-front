import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActividadHorario } from 'src/app/interfaces/actividad-horario.interface';
import { Actividad } from 'src/app/interfaces/actividad.interface';
import { Opinion } from 'src/app/interfaces/opinion.interface';
import { ActividadesService } from 'src/app/services/actividades.service';
import { OpinionesService } from 'src/app/services/opiniones.service';
import { UsersServicesService } from 'src/app/services/users-services.service';

@Component({
  selector: 'app-activity-view',
  templateUrl: './activity-view.component.html',
  styleUrls: ['./activity-view.component.css']
})
export class ActivityViewComponent implements OnInit{

  activity!: Actividad | any;
  activityId!: number;


  constructor(
    public usersServices : UsersServicesService,
    private actividadesServices: ActividadesService,
    private opinionesServices: OpinionesService,
    private activatedRoute: ActivatedRoute,
    private router : Router
  ) { }
  

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(async (params: any) =>  {
      this.activityId = parseInt(params.idactividad)
      let response = await this.actividadesServices.getActivityByID(this.activityId)

      if (response) {
        this.activity = response
        console.log(response)

      } else {
        this.router.navigate(['/actividades'])
      }
    })
  }

  async changeStatus() {
    let estado;
    if (this.activity.estado) {
      estado = false
    } else {
      estado = true
    }
    let updateActivity = {
      nombre: this.activity.nombre,
      precio: this.activity.precio,
      resumen: this.activity.resumen,
      estado: estado
    }
    await this.actividadesServices.updateActivity(updateActivity, this.activity.id)
    window.location.reload()
  }

  async deleteOpinion(opinionId: number) {
    console.log(opinionId)
    await this.opinionesServices.deleteOpinion(opinionId);
    window.location.reload()
  }



}
