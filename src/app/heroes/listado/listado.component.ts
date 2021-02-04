import { Component } from '@angular/core';

// 43. Crear componente de forma automática
// 44. Directiva *ngFor
// 45. Directiva *ngIf
// 46. Ng-Template y el ngIf-else

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Iroman', 'Hulk', 'Thor', 'Capitán América',"Superman"];
  heroeBorrado: string = '';

  borrarHeroe(){
    // CON "shift" SE BORRA EL PRIMER ELEMENTO DEL ARREGLO Y LO RETORNA
    this.heroeBorrado = this.heroes.shift() || '';
    

    // CON "pop" SE BORRA EL ÚLTIMO ELEMENTO DEL ARREGLO
    // this.heroes.pop();

    // CON LA SIGUIENTE LINEA INDICAMOS QUE BORRAREMOS TODOS LOS ELEMENTOS DEL ARREGLO
    // this.heroes = [];
  }
}
