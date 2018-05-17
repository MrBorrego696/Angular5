import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent, JokeComponent, JokeListComponent } from './app.component';
import { bootstrap } from '../../node_modules/bootstrap';

@NgModule({
  declarations: [AppComponent,JokeComponent,JokeListComponent],
  imports: [BrowserModule],
  providers: [AppModule],
  bootstrap: [AppComponent]
})
 
export class AppModule { }


console.error()