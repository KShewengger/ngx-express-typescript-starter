"use strict";

import { Router, Request, Response, NextFunction } from "express";

const router: Router = Router();

// /* GET home page. */
router.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("Welcome to Express");
});

export const indexRoutes: Router = router;