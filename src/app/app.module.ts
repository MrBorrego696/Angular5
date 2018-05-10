import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { JokeComponent } from './app.component';

@NgModule({
  declarations: [JokeComponent],
  imports: [BrowserModule],
  providers: [AppModule],
  bootstrap: [JokeComponent]
})
 
export class AppModule { }


console.error()