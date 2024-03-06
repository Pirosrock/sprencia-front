import { Component } from '@angular/core';
import { UsersServicesService } from 'src/app/services/users-services.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  constructor(
    public usersServices: UsersServicesService) {  }

  logOut() {
    localStorage.removeItem('token_sprencia')    
  }

}
