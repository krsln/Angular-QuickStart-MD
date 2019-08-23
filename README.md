
# NgQuickStart

[Angular](https://angular.io/guide/quickstart) [Angular CLI](https://cli.angular.io/) [Angular CLI GitHub](https://github.com/angular/angular-cli) 
			 
> ng new NgQuickStart --style=css --routing=true

## Update CLI & Core for app
```
ng update @angular/cli --allow-dirty
ng update @angular/core --allow-dirty
#jic
npm cache verify 
npm cache clean --force
``` 
```
npm update -g npm 

npm install -g @angular/cli
npm update -g @angular/cli
``` 
## How to install default packages 
>**for Bootstrap**
```
npm i --save @fortawesome/fontawesome-free 
npm i --save bootstrap jquery popper.js
npm i --save jquery-ui-dist
``` 
>**for [Material-Design](https://github.com/mdbootstrap/Angular-Bootstrap-with-Material-Design#demo)** 
```
npm i angular-bootstrap-md --save
npm install --save @fortawesome/fontawesome-free
npm install -–save chart.js@2.5.0 hammerjs
```   
#### angular.json ~~{ "projects": { "NgProjectName": { "architect": { "build": { "options": {~~
> **for Bootstrap**
```
"styles": [
  "node_modules/@fortawesome/fontawesome-free/css/all.css",
  "node_modules/jquery-ui-dist/jquery-ui.css",
  "node_modules/bootstrap/dist/css/bootstrap.css",
  "src/styles.css"
],
"scripts": [
  "node_modules/@fortawesome/fontawesome-free/js/all.min.js",
  "node_modules/jquery/dist/jquery.min.js",
  "node_modules/jquery-ui-dist/jquery-ui.min.js",
  "node_modules/popper.js/dist/umd/popper.min.js",
  "node_modules/bootstrap/dist/js/bootstrap.min.js"
]
``` 
> **for Material-Design**
``` 
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
```  
#### package.json ~~"scripts": {~~
```
"start": "ng serve --port 4200 --open",
"build": "ng build --prod --base-href /NgQuickStart/",
```  

## Run&Build

Yarn `yarn start` & `yarn build`

NPM Run `npm start` to run the project.

Run `npm build` to build the project.
The build artifacts will be stored in the `dist/` directory.  

## Some Packages

[Masonry](https://masonry.desandro.com/#package-managers)
     
>npm install masonry-layout

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io). 

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
