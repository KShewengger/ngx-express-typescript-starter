import { Request, Response, NextFunction } from "express";


export function addUser(req: Request, res: Response, next: NextFunction) {
  res.json("Successfully Added User");
}

export function updateUser(req: Request, res: Response, next: NextFunction) {
  res.json("Successfully Updated User");
}

export function getUser(req: Request, res: Response, next: NextFunction) {
  res.json("Successfully Get User Info");
}

export function deleteUser(req: Request, res: Response, next: NextFunction) {
  res.json("Successfully Deleted User");
}

