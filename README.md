# ngx-express-typescript-starter
An Angular and Node Express Typescript Starter Kit

> Converting backend js files to ts files with typescript class format and redesigned express routes and it's api calls.


#### Main Dev Tools Used
`Angular 7` `Angular CLI` `Node` `Express` `Typescript` `ES6` `Babel 7`

#### Clone the project
` $ git clone https://github.com/KShewengerz/ngx-express-typescript-starter`

or

#### NOTE
##### Clone the project DO NOT perform `$ npm install ngx-express-typescript-starter` as this doesn't support a shell script yet.


```
Github Repo:
https://github.com/KShewengerz/ngx-express-typescript-starter
```


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



NOTE: 
1.) Update also the Node package.json and rename the "build" and "ng-start" scripts changing the old "ng-app" to your newly created angular app (new name) 
2.) Update Node Tsconfig path, changing the old angular app name to its new name

```


#### Babel and tsconfig paths support on Node and Angular

```
AVOID:
On node    : import {} from '../../shared/enums/tables/user'
On angular : import {} from './app.component'

INSTEAD USE:
import {} from '@app/enums';
import {} from '@app/app.component'   or '@app/user/user.component'


NOTE:
- These are set on the respective tsconfig.json on your Node (./tsconfig.json) 
and Angular (./public/ng-app/tsconfig.json)

- If you want to customized and support some directories, you can do so 
by updating both the .babelrc and tsconfig.json of express or angular
```
 

