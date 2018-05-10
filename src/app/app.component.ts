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
  selector: 'joke',
  template:
            `
            <h1>What did the cheese say when it looked in the mirror?</h1>
            <p>Halloumi (Hello Me)</p>
            `
})

export class JokeComponent {
  
}
