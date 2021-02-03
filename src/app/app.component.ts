import { Component } from '@angular/core';
import { Validators } from '@angular/forms';

//35. App Component
//36. Contador App
//37. Métodos en el componente
//38. Tarea con el contador
//39. Crear un componente manualmente
@Component({
  selector: 'app-root',
  //PODEMOS USAR "templateUrl" o "template", CON EL PRIMERO USAMOS UN ARCHIVO EXTERNO CON EL 2DO CREAMOS LOS TEMPLATES DIRECTOS(SE ACONSEJA EL "templateUrl") 
   templateUrl: 'app.component.html'
 // template: 
})
export class AppComponent {
  // public titulo: string = 'Contador App';
  // public numero: number = 10;

  // public base: number = 5;



  // acumular( valor: number ) {
  //   this.numero += valor;
  // }
}
