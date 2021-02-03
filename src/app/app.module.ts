import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorModule } from './contador/contador.module';

import { HeroesModule } from './heroes/heroes.module';
// import { HeroeComponent } from './heroes/heroe.component';
// import { ListadoComponent } from './heroes/listado/listado.component';

// 39. Crear un componente manualmente (se agregó "ContadorComponent" en "@NgModule")
// 40. Componente de Heroe y separación de directorios (se agregó "HeroeComponent" en "@NgModule")
// 47. Módulos

@NgModule({
  declarations: [
    AppComponent
    //HeroeComponent,
    //ListadoComponent,
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
