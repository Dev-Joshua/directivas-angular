import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Registro de Usuarios';
  mensaje = '';
  userRegistrado = false;
  nombre: string = '';
  apellido: string = '';
  cargo: string = '';
  entradas: any;

  constructor() {
    this.entradas = [
      { titulo: 'Python cada día más presente' },
      { titulo: 'Java presente desde hace mas de 20 años' },
      { titulo: 'Kotlin potencia para tus apps' },
      { titulo: 'JavaScript cada vez mas funcional' },
      { titulo: '¿Angular el framework mas completo?' },
    ];
  }

  registrarUsuario() {
    this.userRegistrado = true;
    this.mensaje = 'Usuario registrado con éxito';
  }
}
