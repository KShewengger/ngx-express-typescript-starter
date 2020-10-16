# ngx-express-typescript-starter
An Angular 10 and Node Express Typescript Starter Kit with SCSS Architecture & Configuration Setup

> Converting backend js files to ts files with typescript class format and redesigned express routes and it's api calls.

#### 1. Main Dev Tools Used
`Angular 10` `Angular CLI` `Node` `Express` `Typescript` `ES6` `Babel 7`

#### 2. Clone or Fork the repository
**[Github Repository](https://github.com/KShewengger/ngx-express-typescript-starter)**

- As this does not support a shell script yet. Thus, will only end up on your node_modules
- Avoid `$ npm install ngx-express-typescript-starter`


#### 3. How to run

> 1.) Install Dependencies
````
 $ npm run install:all    - Installs all package.json from express & angular

 $ npm run clear:all      - Remove all node_modules on backend and frontend
````

> 2.) Run your app (You can choose any of these options)
```
 $ npm run ng:start       - Runs angular at http://localhost:4200

 $ npm run node:start     - Runs express at http://localhost:3000
                          - To test the current running route visit http://localhost:3000/user
 
 $ npm run start:dev      - Runs both angular (http://localhost:4200) and 
                          express (http://localhost:3000/user -- current active api endpoint)
        

 $ npm run start:prod     - Builds your angular app using production build 
                          - Runs your node server serving the generated angular 
                          dist directory at the same port 3000
                          - Now both Node & Angular are running on the same port 
                          and can accessed with http://localhost:3000
                          - We use pm2 for this as pm2 is best served in production
````

#### 4. Babel and tsconfig paths support on Node and Angular

```
import {} from '@app/enums';
import {} from '@app/app.component'   or '@app/user/user.component'


NOTE:
- These are set on the respective tsconfig.json on your Node (./tsconfig.json) 
and Angular (./public/ng-app/tsconfig.json)

- If you want to customized and support some directories, you can do so 
by updating both the .babelrc and tsconfig.json of express or angular
```
 #### NOTE:
```
- Be sure your NodeJS is version 12.x.x 

- If you need help in regards to the Angular Upgrade, you can follow these instructions:
https://github.com/angular/angular-cli/issues/14546#issuecomment-499908273

- The "warning in" empty messages are currently being resolved right now on Angular CLI team,
please stay up to date on this thread: https://github.com/angular/angular-cli/issues/18231

- If you want to stick with CSS, just leave the schematics property to empty object in angular.json
schematics: {} and remove the stylePreprocessorOptions property
```

