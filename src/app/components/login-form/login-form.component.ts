import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersServicesService } from 'src/app/services/users-services.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  
  formularioLogin: FormGroup  

  constructor(
    private usersServices: UsersServicesService,
    private router : Router
  ) {
    this.formularioLogin = new FormGroup({
      username: new FormControl(),
      contraseña: new FormControl()
    })
  }

  async onSubmit() {
        if (this.formularioLogin.value.username == null) {
        Swal.fire({
        title: 'Ooops! Login incorrecto',
        text: 'Se te olvidó poner usuario y contraseña',
        icon: 'error'
        })
        return
        
    }
    console.log(this.formularioLogin.value)

    try {
      const response = await this.usersServices.login(this.formularioLogin.value)
      console.log(response)
      await Swal.fire({
        title: 'Login Correcto',
        icon: 'success'
      })
      localStorage.setItem('token_sprencia', response.token)
      this.router.navigate(['/actividades'])

    } catch (err: any) {
      Swal.fire({
        title: 'Ooops! Login incorrecto',
        text: err.error.Message,
        icon: 'error'
      })
    }

  }

  
  

}
