# ngx-express-typescript-starter
An Angular 8 and Node Express Typescript Starter Kit

> Converting backend js files to ts files with typescript class format and redesigned express routes and it's api calls.


#### 1. Main Dev Tools Used
`Angular 8` `Angular CLI 8` `Node` `Express` `Typescript` `ES6` `Babel 7`

#### 2. Clone the project
- As this doesn't support a shell script yet. Thus, will only end up on your node_modules
- Do not perform `$ npm install ngx-express-typescript-starter` 

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
 

