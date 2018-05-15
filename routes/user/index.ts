"use strict";

import { Router } from "express";

import * as userApi from "./user-api";

const router: Router = Router();


router.post("/", userApi.addUser);
router.put("/", userApi.updateUser);
router.get("/:id", userApi.getUser);
router.delete("/:id", userApi.deleteUser);

export const userRoutes: Router = router;