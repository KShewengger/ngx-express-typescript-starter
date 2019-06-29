# ngx-express-typescript-starter
An Angular 8 and Node Express Typescript Starter Kit

> Converting backend js files to ts files with typescript class format and redesigned express routes and it's api calls.


#### Main Dev Tools Used
`Angular 8` `Angular CLI 8` `Node` `Express` `Typescript` `ES6` `Babel 7`

#### Clone the project
` $ git clone https://github.com/KShewengerz/ngx-express-typescript-starter`

#### NOTE
##### Clone the project DO NOT perform `$ npm install ngx-express-typescript-starter` 
- As this doesn't support a shell script yet. Thus, will only end up on your node_modules


```
Github Repo:
https://github.com/KShewengerz/ngx-express-typescript-starter
```


#### How to run

````
 $ npm run install:all          - Installs all package.json from express & angular
 
 $ npm run ng:start       - Runs angular at http://localhost:4200
 $ npm run node:start  - Runs express at http://localhost:3000
 $ npm run start          - Runs both angular and express
````

#### Incase: Angular Spec Bug
```
If you will stumble with this error while running "npm run express:start"
public/app/e2e/src/app.e2e-spec.ts(13,41): error TS2345: Argument of type '"Welcome to app!"' is not assignable to parameter of type 'Expected<Promise<string>>'.

Just modify the /public/app/e2e/src/app.e2e-spec.ts line 13 - 

from : expect(page.getTitleText()).toEqual('Welcome to app!');
to : expect<any>(page.getTitleText()).toEqual('Welcome to app!');

Adding type <any>
```

#### Change Existing Angular App 
If you want to remove the existing public/app angular directory and generate other angular app with angular your cli version. These are some notes to consider:

```
1.) Update the @angular/cli version on the root folder's package.json matching your global version
2.) Perform ng new or ng generate on public folder
3.) Update also the Node package.json and rename the "install:all" and "ng:start" scripts changing the old "app" to your newly created angular app (new name) 
4.) Update root tsconfig.json path, changing the old angular app name to its new name
5.) Since its a newly generated angular app, just supply this line on your tsconfig.json
  
  "paths": {
     "@app/*": ["src/app/*"]
   }
```

#### Front End and Back End Test

```
Front End:
1.) Run $ npm run ng:start
2.) Visit http://localhost:4200

Back End:
1.) Run $ npm run node:start
2.) Visit http://localhost:3000/user 
  - endpoint configured when fetching users 
  - a simple message will appear
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
 

