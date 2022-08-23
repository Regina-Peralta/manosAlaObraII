import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TituloComponent } from './titulo/titulo.component';
import { InputBotonComponent } from './input-boton/input-boton.component';
import { ListaTareasComponent } from './lista-tareas/lista-tareas.component';
import { ItemCounterComponent } from './item-counter/item-counter.component';


@NgModule({
  declarations: [
    AppComponent,
    TituloComponent,
    InputBotonComponent,
    ListaTareasComponent,
    ItemCounterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
