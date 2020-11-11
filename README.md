# ngx-express-typescript-starter
An Angular 10 and Node Express Typescript Starter Kit with SCSS Architecture & Configuration Setup

> Converting backend js files to ts files with typescript class format and redesigned express routes and it's api calls.

## Main Dev Tools Used
`Angular 10` `Angular CLI` `Node` `Express` `Typescript` `ES6` `Babel 7`

## Prerequisites (global)
Be sure to install these packages on your global and readily accessible in your terminal

| Package        | Version | Installation
| ------------- | ------------- | ------------- |
| Node         | \>=12.x.x     |
| PM2         | \>=4.x.x      |  `$ npm install -g pm2`
| Git        | any           |

## Installation (-g) 

```
$ npm install -g ngx-express-typescript-starter
```

> In case you have encountered a problem installing with the CLI commands provided below, you can use this option instead
>    
>   1.) Clone the project: https://github.com/KShewengger/ngx-express-typescript-starter
>  
>   2.) Extract or Get a copy of the /source directory and rename it to your own project name.

## Setup

**Syntax**
```
$ ngx-express generate <OPTIONS>                // Add options as specified below
```

**Options**

| Option           | Type           | Default                  | Description
| ---------------- | ------------- | ------------------------ | ------------- |
| `--appName`      | string       | *Current Directory Name* | Generate a folder using your app's name & also generate it's corresponding folders & files
| `--installDeps`  | boolean     | true                     | Installs backend and frontend dependencies

**Preferrable**
> It's best if you could set your `installDeps` to **false** and solely install them by
> running `$ npm run install:all` after the app has been generated. 
>
>  This is due to some dependencies that take time to load.

## Implementation
*You can choose any of these commands below:*


**Method #1 -** Generate folders & files inside your current working directory and install frontend & backend dependencies

```
$ ngx-express generate
```

**Method #2 -** Generate using your directory's name and manually install frontend and backend dependencies
```
$ ngx-express generate --installDeps=false

$ npm run install:all
```

**Method #3 -** Generate using your app's name and install frontend and backend dependencies
```
$ ngx-express generate --appName="<YOUR_APP_NAME>"
```

**Method #4 -** Generate using your directory's name and manually install frontend and backend dependencies. 
```
$ ngx-express generate --appName="<YOUR_APP_NAME>" --installDeps=false 

$ cd <YOUR_APP_NAME>

$ npm run install:all 
```

## How to run

Run your app *(You can choose any of these commands)*
```
 $ npm run ng:start       - Runs angular at http://localhost:4200
                          - Run on separate terminal

 $ npm run node:start     - Runs express at http://localhost:3000
                          - To test the current running route visit http://localhost:3000/users
                          - Run on separate terminal
 
 $ npm run start:dev      - Runs both angular (http://localhost:4200) and express (http://localhost:3000)
                          - You can access your API endpoints with http://localhost:3000/<route_name>
                          - You can test http://localhost:3000/users as this was set by default
                          - But note that http://localhost:3000 is reserved and will be serving your angular dist folder 
                          when you perform ng build.   
                          - Node is served using Nodemon for development
                          - Since this uses nodemon every change it detects and re-run, it's best to run the node &
                          angular separately, refer to the prior 1st 2 commands above
        
 $ npm run start:prod     - Builds your angular app using production build 
                          - Runs your node server serving the generated angular dist directory at the same port 3000
                          - Now both Node & Angular are running on the same port & can accessed w/ http://localhost:3000
                          - Node is served using PM2 for production
````

## SCSS Import Support (Angular)
```
// In reference to the SCSS architecture set on your /public/app/src/assets/styles
// If you want to access any of those files in your angular components' scss files, you can do so by specifying the
// code block below

@import '@base/colors';                // If you want to access the color variables

.header {
   color: $teal-100;                   // You can set whatever value you have supplied in your 
                                       // /public/app/src/assets/styles/base/colors.scss
}
```


## Babel and tsconfig paths support on Node and Angular

**Implementation**
```
import {} from '@app/enums';
import {} from '@app/app.component' or '@app/user/user.component'
```

**NOTE**
- These are set on your respective tsconfig.json on your Node (./tsconfig.json) 
and Angular (./public/app/tsconfig.json)

- If you want to customized and support some directories with their corresponding paths, you can edit your `tsconfig.json` **paths** property

- Angular: Whatever paths you have set in your angular's `tsconfig.json` be sure to also add it in your node's `tsconfig.json` with `./public/app` prefix in it

- Node: Whatever paths you have set in your node's `tsconfig.json` be sure to also add it in your `.babelrc` with `./dist` prefix in it.

