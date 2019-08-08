# NgQuickStart

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.0.

## Source
https://github.com/mdbootstrap/Angular-Bootstrap-with-Material-Design#demo

## Development server
How to install MDB via npm
ng new NgQuickStart --style=css

npm i angular-bootstrap-md --save
npm install --save-dev @fortawesome/fontawesome-free
npm install -–save chart.js@2.5.0 hammerjs

## angular.json

           "styles": [
              "node_modules/@fortawesome/fontawesome-free/css/all.css",
              "node_modules/angular-bootstrap-md/assets/scss/bootstrap/bootstrap.scss",
              "node_modules/angular-bootstrap-md/assets/scss/mdb.scss",
              "src/styles.css"
            ],
            "scripts": [
              "node_modules/@fortawesome/fontawesome-free/js/all.min.js",
              "node_modules/chart.js/dist/Chart.js",
              "node_modules/hammerjs/hammer.min.js"
            ]

## package.json

    "toServe": "ng serve --port 4200 --open",
    "toBuild": "ng build --prod --base-href /NgQuickStart/",
 
## Run&Build

Run `npm run toServe` to run the project.
Run `npm run toBuild` to build the project.
The build artifacts will be stored in the `dist/` directory.  

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
