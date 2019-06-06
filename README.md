# Angular Material App

This app integrates Google's Material Design into an Angular 8 app. It displays a series of coloured cards from a public API. The number of cards is limited to 10 using a splice function, but there are 500 of these cards available, all with titles, numbers etc.  

*** Note: to open web links in a new window use: _ctrl+click on link_**

## Table of contents

* [General info](#general-info)
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)

## General info

* A Gary Simon tutorial was followed (based on Angular 4) but the app.module.ts, app.component.ts and app.component.html required changes due to changes in Angular 7/8.

* Materials modules begin with 'mat' and not 'md'; md has been deprecated.  

* The map function/Angular module (and related pipe function) were not required. The data defaults to json format and a simpler code worked.

* [A jsonplaceholder API](https://jsonplaceholder.typicode.com/photos) was used to provide dummy json data for the app.

## Screenshots

![Example screenshot](./img/angular-mat-cards.png).
![Example screenshot](./img/mat-cards-augury.png).

## Technologies

* [Angular v8.0.0](https://angular.io/)

* [Angular CLI v8.0.1](https://cli.angular.io/).

* [RxJS Library v6.5.2](https://angular.io/guide/rx-library) used to handle datastreams and propagation of change using observables.

* [Angular Material v8.0.0](https://material.angular.io/).

## Setup

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code Examples

```typescript
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { map } from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  myData: any;

  constructor(private http: HttpClient) {

    this.http.get('https://jsonplaceholder.typicode.com/photos')
      .subscribe(
        data => {
          this.myData = data;
          console.log(data);
        },
        error => {
          alert('ERROR');
        });
  }
}

```

## Features

* angular materials cards used to show api data.

## Status & To-Do List

* Status: Working.

* To-Do: add functionality.

## Inspiration

* [original Angular 4 Material Tutorial by Gary Simon](https://coursetro.com/posts/code/67/Angular-4-Material-Tutorial).

## Contact

Repo created by [ABateman](https://www.andrewbateman.org) - feel free to contact me!
