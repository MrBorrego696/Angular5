import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { JokeListComponent } from './app.component';
import { bootstrap } from '../../node_modules/bootstrap';

@NgModule({
  declarations: [JokeListComponent],
  imports: [BrowserModule],
  providers: [AppModule],
  bootstrap: [JokeListComponent]
})
 
export class AppModule { }


console.error()