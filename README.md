# ngx-express-typescript-starter
An Angular 8 and Node Express Typescript Starter Kit

> Converting backend js files to ts files with typescript class format and redesigned express routes and it's api calls.


#### 1. Main Dev Tools Used
`Angular 8` `Angular CLI 8` `Node` `Express` `Typescript` `ES6` `Babel 7`

#### 2. Clone the project
- As this doesn't support a shell script yet. Thus, will only end up on your node_modules
- Do not perform `$ npm install ngx-express-typescript-starter` 

` $ git clone https://github.com/KShewengerz/ngx-express-typescript-starter`

#### 3.) Installing it via `$ npm`. Consider these things after installing it: 

```
1.) Copy the ngx-express-typescript-starter directory from your node_modules
2.) Paste the said directory outside of your node_modules 
Or copy the whole directory and separate it from your current directory making the ngx-express-typescript-starter directory as your current root directory.
4.) Rename the ngx-express-typescript-starter directory to your preferred project name
5.) Edit your package.json to the actual clean format. Be sure to preserve the script commands, dependencies and devDependencies
```

#### 4. Upgrade your version to Angular 8 
`If ever you decide to remove the current angular project directory`

```
Follow this steps from the referenced link: 
https://github.com/angular/angular-cli/issues/14546#issuecomment-499908273
```


#### 5. How to run

````
 $ npm run install:all    - Installs all package.json from express & angular
 
 $ npm run ng:start       - Runs angular at http://localhost:4200
 $ npm run node:start     - Runs express at http://localhost:3000
 $ npm run start          - Runs both angular and express
````

#### 6. Incase: Angular Spec Bug
If you will stumble with this error while running "npm run express:start"

```
public/app/e2e/src/app.e2e-spec.ts(13,41): error TS2345: Argument of type '"Welcome to app!"' is not assignable to parameter of type 'Expected<Promise<string>>'.
```

Just modify the /public/app/e2e/src/app.e2e-spec.ts line 13 

```
from : expect(page.getTitleText()).toEqual('Welcome to app!');
to : expect<any>(page.getTitleText()).toEqual('Welcome to app!');

Adding type <any>
```

#### 7. Change Existing Angular App 
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

#### 8. Front End and Back End Test

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

#### 9. Babel and tsconfig paths support on Node and Angular

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
 

