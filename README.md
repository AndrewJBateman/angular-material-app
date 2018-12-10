# Angular-Material-App

This integrates Google's Material Design into an Angular 7 app. It displays a series of coloured cards from a public API. The number of cards is limited to 10 using a splice function, but there are 500 of these cards available, all with titles, numbers etc.  

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.6.


## Notes

A Gary Simon tutorial was followed (based on Angular 4) but the app.module.ts, app.component,ts and app.component.html required changes due to changes in Angular 7. 

Materials modules begin with 'mat' and not 'md'; md has been deprecated.  
The map function/Angular module (and related pipe function) were not required. The data defaults to json format and a simpler code worked. Functionality added, but could be improved to show more complex API data together with more menu options.

Link to: [original Angular 4 Material Tutorial by Gary Simon](https://coursetro.com/posts/code/67/Angular-4-Material-Tutorial).
