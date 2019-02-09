# ngx-express-typescript-starter
An Angular and Node Express Typescript Starter Kit

> Converting backend js files to ts files with typescript class format and redesigned express routes and it's api calls.


#### Main Dev Tools Used
`Angular 7` `Angular CLI` `Node` `Express` `Typescript` `ES6` `Babel`


#### Clone the project
` $ git clone https://github.com/KShewengerz/ngx-express-typescript-starter`


#### How to run

````
 $ npm run build          - Installs all package.json from express & angular
 
 $ npm run ng-start       - Runs angular at http://localhost:4200
 $ npm run express-start  - Runs express at http://localhost:3000
 $ npm run start          - Runs both angular and express
````


#### Rename Angular App

```
To rename the existing angular app from /public, you need to:

1.) Rename all 'ng-app' to <your_new_angular_directory_name> on: 

    a.) angular.json
    b.) package.json
    c.) ReadMe
    d.) index.html (public/ng-app/src/index.html)

or

2.) Delete the current ng-app directory at /public and generate a new ng-app with angular cli's 

$ ng new <your_new_angular_app_name>



NOTE: Update package.json (not on angular directory but on the express root) and rename the "build" and "ng-start" scripts changing the old "ng-app" to your newly created angular app (new name) 

```


#### Babel and Tsconfig paths support

```
AVOID:
import {} from '../../shared/enums/tables/user'


INSTEAD USE:
import {} from '@app/enums';


NOTE:
Currently it has supported a couple of paths e.g config, controllers, interfaces and enums. If you want to customized and support some directories, you can do so by updating both the .babelrc and tsconfig.json (express root not on angular)

```
 

