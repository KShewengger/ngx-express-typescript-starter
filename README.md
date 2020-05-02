# ngx-express-typescript-starter
An Angular 9 and Node Express Typescript Starter Kit

> Converting backend js files to ts files with typescript class format and redesigned express routes and it's api calls.


#### 1. Main Dev Tools Used
`Angular 9` `Angular CLI` `Node` `Express` `Typescript` `ES6` `Babel 7`

#### 2. Clone the project
- As this doesn't support a shell script yet. Thus, will only end up on your node_modules
- Do not perform `$ npm install ngx-express-typescript-starter` instead do this:

` $ git clone https://github.com/KShewengerz/ngx-express-typescript-starter`

#### 3. How to run

````
 $ npm run install:all    - Installs all package.json from express & angular
 
 $ npm run ng:start       - Runs angular at http://localhost:4200
 $ npm run node:start     - Runs express at http://localhost:3000
 $ npm start              - Runs both angular and express
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
```

