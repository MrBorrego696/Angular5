/*
  import { Component } from '@angular/core';

  @Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
  })
  export class AppComponent {
    title = 'app';
  }
*/
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {BrowserModule} from "@angular/platform-browser";
import {Component, NgModule} from "@angular/core";


@Component({
  selector: 'joke-list',
  template:
            `
            <div class=" card card-block"
              *ngFor="let joke of jokes">
              <h4 class="card-title">{{joke.setup}}</h4>
              <p class="card-text" [hidden]=joke.hide>{{joke.punchline}}</p>
              <a class="btn btn-danger" (click)="toggle(joke)">Tell Me</a>
            </div>
            `
})


export class JokeListComponent {
  jokes: Object[];
  
  constructor(){
    this.jokes = [
      {
        setup: "What did the cheese sat when it looked in the mirror?",
        punchline: "Hello (Halloumi)",
        hide: true
      },
      {
        setup: "What kind of cheese do you use to disguise a small horse?",
        punchline: "Mask-a-pony (Mascarpone)",
        hide: true
      },
      {
        setup: "A kid threw a lump of cheddar at me",
        punchline: "I thougt 'that's not very mature'",
        hide: true
      }
    ];
  }
  toggle(joke){
    joke.hide= !joke.hide;
  }
}
