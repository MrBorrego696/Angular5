import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule} from '@angular/platform-browser';
import { Component, NgModule, Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';


class Joke {
  public setup: string;
  public punchline: string;
  public hide: boolean;

  constructor(setup: string, punchline: string) {
    this.setup = setup;
    this.punchline = punchline;
    this.hide = true;
  }

  toggle() {
    this.hide = !this.hide;
  }
}

@Component ({
  selector : 'joke-form',

  template: `
            <div class="card card-block">
              <h4 class="card-title">Create Joke</h4>
              <div class="form-group">
                <input type="text" class="form-control" placeholder="Enter the setup" #setup>
              </div>
              <div class="form-group">
                <input type="text" class="form-control" placeholder="Enter the punchline" #punchline>
              </div>
              <button type="button" class="btn btn-success" (click)="createJoke(setup.value, punchline.value)">Create</button>
            </div>
            `
})

export class JokeFormComponent {
  @Output() jokeCreated = new EventEmitter<Joke>();

  createJoke(setup: string, punchline: string) {
    this.jokeCreated.emit(new Joke(setup, punchline));
  }
}

@Component({
  selector: 'joke',
  template: `
            <div class="card card-block">
              <h1 class="card-title">{{data.setup}}</h1>
              <p class="card-text" [hidden]="data.hide">{{data.punchline}}</p>
              <a (click)="data.toggle()" class="btn btn-info">
              Tell Me
              </a>
            </div>
            `
})

export class JokeComponent {
  @Input('joke') data: Joke;
}

@Component({
  selector: 'joke-list',
  template: `
            <joke-form (jokeCreated)="addJoke($event)"></joke-form>
            <joke *ngFor="let j of jokes" [joke]="j"></joke>
            `
})

export class JokeListComponent {
  jokes: Joke[];

  constructor() {
    this.jokes = [
      new Joke("What did the cheese say when it looked in the mirror?", "Hello-me (Halloumi)"),
      new Joke("What kind of cheese do you use to disguise a small horse?", "Mask-a-pony (Mascarpone)"),
      new Joke("A kid threw a lump of cheddar at me", "I thought ‘That’s not very mature’"),
    ];
  }

  addJoke(joke) {
    this.jokes.unshift(joke);
  }
}

@Component({
  selector: 'app',
  template: `
            <joke-list></joke-list>
            `
})

export class AppComponent {
}