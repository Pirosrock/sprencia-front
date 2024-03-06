import { Component, OnInit, Input } from '@angular/core';
import { Actividad } from 'src/app/interfaces/actividad.interface';
import { ActividadesService } from 'src/app/services/actividades.service';

@Component({
  selector: 'app-actividad-card',
  templateUrl: './actividad-card.component.html',
  styleUrls: ['./actividad-card.component.css']
})
export class ActividadCardComponent implements OnInit  {

  @Input() actividad!: Actividad
  horarios : any = []

  constructor(private actividadesServices : ActividadesService) { }
  
  async ngOnInit(): Promise<void> {
    this.horariosPorActividad()
  }

  async horariosPorActividad() {
    try {
      if (this.actividad.id) {
        let actividad = await this.actividadesServices.getActivityByID(this.actividad.id)
        this.horarios = actividad.actividad_Horarios      
      }
    } catch (error: any) {
      console.error(error.message)
    }
  }


}
