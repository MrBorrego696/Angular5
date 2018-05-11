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


export class Joke {
  jokes: Joke[];
    public setup: string;
    public punchline: string;
    public hide: boolean;

  constructor(setup: string, punchline: string){
    this.setup = setup;
    this.punchline = punchline;
    this.hide = true;
  }

  toggle(joke){
    joke.hide= !joke.hide;
  }

}

@Component({
  selector: 'joke-list',
  template:
            `
            <div class="card card-block"
              *ngFor="let joke of jokes" class="container">
              <h4 class="card-title"> {{joke.setup}} </h4>
              <p class="card-text" [hidden]=joke.hide> {{joke.punchline}} </p>
              <a class="btn btn-info" (click)="toggle(joke)"> Tell Me </a>
            </div>
            `
})

export class JokeListComponent {
  jokes: Joke[];

  constructor(){
    this.jokes = [
      new Joke("What did the cheese say when it looked in the mirror?", "Hello-me(Halloumi)"),
      new Joke("What kind of cheese do you use to disguise a small horse?", "Mask-apony(Mascarpone)"),
      new Joke("A kid threw a lump of cheddar at me", "I thought ‘That’s not verymature’"),
    ];
  }
  toggle(joke){
    joke.hide= !joke.hide;
  }
}