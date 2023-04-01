import { NextFunction, Request, Response } from "express";

//handle async errors
export const catchAsyncError = (func: (req: Request, res: Response, next: NextFunction, options?: any) => void) => (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(func(req, res, next)).catch((err) => {
        console.log(err);
        next(err);
    })
};