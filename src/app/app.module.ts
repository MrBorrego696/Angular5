import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent, JokeComponent, JokeListComponent, JokeFormComponent } from './app.component';
import { bootstrap } from '../../node_modules/bootstrap';
import { Ejercicio1 } from '../Ejercicios/ejercicio1.component';

@NgModule({
  declarations: [AppComponent,
                JokeComponent,
                JokeListComponent,
                JokeFormComponent,
                Ejercicio1],
  imports: [BrowserModule],
  bootstrap: [AppComponent,
              JokeComponent,
              JokeListComponent,
              JokeFormComponent,
              Ejercicio1]
})


export class AppModule { }