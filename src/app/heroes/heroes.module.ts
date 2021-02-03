import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from './heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    // "declarations" CONTIENE LOS COMPONENTES
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    // "exports" CONTIENE LAS COSAS QUE DESEAMOS HACER PÚBLICAS
    exports: [
        ListadoComponent
    ],
    // "imports" CONTIENE MÓDULOS
    imports: [
        CommonModule
    ]

})
export class HeroesModule {}