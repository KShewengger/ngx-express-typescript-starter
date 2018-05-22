"use strict";

import { Request, Response, NextFunction } from "express";
import * as bodyParser from "body-parser";
import * as cookieParser from "cookie-parser";
import * as express from "express";
import * as logger from "morgan";
import * as path from "path";
import * as favicon from "serve-favicon";
import * as cors from "cors";

import { indexRoutes } from "./routes/index";
import { userRoutes } from "./routes/user/-index";


export class Index {
  public app: express.Application;
  
  public static bootstrap(): Index {
    return new Index;
  }
  
  constructor() {
    this.app = express();
    
    this.middlewares();
    this.routes();
    this.catchErrors();
  }
  
  
  /**
   * Middlewares
   */
  private middlewares(): void {
    // this.app.use(favicon(path.join(__dirname, "public", "favicon.ico")));
    this.app.use(cors({ credentials: true, origin: true }));
    
    this.app.use(logger("dev"));
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({extended: false}));
    this.app.use(cookieParser());
    this.app.use(express.static(path.join(__dirname, "public")));
  }
  
  
  /**
   * Error Handlers
   */
  private catchErrors(): void {
    this.app.use((req: Request, res: Response, next: NextFunction) => {
      const err: any = new Error("Not Found");
      err.status = 404;
      
      next(err);
    });
    
    this.app.use((err: any, req: Request, res: Response, next: NextFunction) => {
      const statusCode = err.status || 500;
      
      res.locals.message = err.message;
      res.locals.error = req.app.get("env") === "development" ? err : {};
      
      res.status(statusCode).send("Server Error");
    });
  }
  
  
  /**
   * Api Routes
   */
  private routes(): void {
    this.app.use("/", indexRoutes);
    this.app.use("/user", userRoutes);
  }
}