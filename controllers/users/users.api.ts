import { Request, Response, NextFunction } from "express";


/**
 * Adds new user
 * @api {post} /user
 *
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 *
 * @returns {Promise<void>}
 */
export function addUser(req: Request, res: Response, next: NextFunction) {
  res.json("Successfully Added User");
}


/**
 * Update user's information
 * @api {put} /user
 *
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 *
 * @returns {Promise<void>}
 */

export function updateUser(req: Request, res: Response, next: NextFunction) {
  res.json("Successfully Updated User");
}


/**
 * Fetches all users
 * @api {get} /user
 *
 * @apiParam {Uuid} id
 *
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 *
 * @returns {Promise<void>}
 */
export function getUsers(req: Request, res: Response, next: NextFunction) {
  res.json("Successfully Get Users");
}


/**
 * Fetches user's record
 * @api {get} /user/:id
 *
 * @apiParam {Uuid} id
 *
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 *
 * @returns {Promise<void>}
 */
export function getUser(req: Request, res: Response, next: NextFunction) {
  res.json("Successfully Get User Info");
}


/**
 * Deletes user record by id
 * @api {delete} /user/:id
 *
 * @apiParam {Uuid} id
 *
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 *
 * @returns {Promise<void>}
 */
export function deleteUser(req: Request, res: Response, next: NextFunction) {
  res.json("Successfully Deleted User");
}

