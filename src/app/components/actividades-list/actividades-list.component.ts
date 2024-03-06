import { Component, HostListener, OnInit } from '@angular/core';
import { Actividad } from 'src/app/interfaces/actividad.interface';
import { ActividadesService } from 'src/app/services/actividades.service';

@Component({
  selector: 'app-actividades-list',
  templateUrl: './actividades-list.component.html',
  styleUrls: ['./actividades-list.component.css']
})
export class ActividadesListComponent implements OnInit {

  showScrollButton: boolean = false;

  arrActividades: Actividad[] = []
  
  constructor(
    private actividadesService: ActividadesService) { }

  async ngOnInit() {
    this.arrActividades = await this.actividadesService.getAll()    
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (window.scrollY > 20) {
      this.showScrollButton = true;
    } else if (this.showScrollButton && window.scrollY <= 20) {
      this.showScrollButton = false;
    }
  }

    scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

}
