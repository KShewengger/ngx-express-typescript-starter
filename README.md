# ngx-express-typescript-starter
An Angular 11 and Node Express Typescript Starter Kit with SCSS Architecture & Configuration Setup

> Converting backend js files to ts files with typescript class format and redesigned express routes and it's api calls.

### Main Dev Tools Used
`Angular 11` `Angular CLI` `Node` `Express` `Typescript` `ES6` `Babel 7`

### How to run
```
 $ npm run ng:start      - Runs angular at http://localhost:4200
                          - Run on separate terminal

 $ npm run node:start    - Runs express at http://localhost:3000
                          - To test the current running route visit http://localhost:3000/users
                          - Run on separate terminal
 
 $ npm run start:dev     - Runs both angular (http://localhost:4200) and express (http://localhost:3000)
                          - You can access your API endpoints with http://localhost:3000/<route_name>
                          - You can test http://localhost:3000/users as this was set by default
                          - But note that http://localhost:3000 is reserved and will be serving your angular dist folder 
                          when you perform ng build.   
                          - Node is served using Nodemon for development
                          - Since this uses nodemon every change it detects and re-run, it's best to run the node &
                          angular separately, refer to the prior 1st 2 commands above
        
 $ npm run start:prod    - Builds your angular app using production build 
                          - Runs your node server serving the generated angular dist directory at the same port 3000
                          - Now both Node & Angular are running on the same port & can accessed w/ http://localhost:3000
                          - Node is served using PM2 for production
```
