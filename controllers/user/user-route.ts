import { Router } from "express";

import * as api from "./user-api";

const router: Router = Router();

/**
 * Adds new user
 */
router.post("/", api.addUser);


/**
 * Update's user information.
 */
router.put("/", api.updateUser);


/**
 * Get All Users
 */
router.get("/", api.getUsers);

/**
 * Get user by id
 *
 * @param {number} id
 */

router.get("/:id", api.getUser);


/**
 * Deletes user record by id
 *
 * @param {number} id
 */
router.delete("/:id", api.deleteUser);


export const userRoutes: Router = router;