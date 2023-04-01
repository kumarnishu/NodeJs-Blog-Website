import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import User from "../models/User";
import { catchAsyncError } from "./catchAsyncError.middleware";

let UserTokens: string[] = []//for storing access tokens in memory

//authenticate user
export const isAuthenticatedUser = catchAsyncError(async (req: Request, res: Response, next: NextFunction) => {
    if (!req.cookies.accessToken)
        return res.status(403).json({ message: "please login to access this resource" })
    if (!UserTokens.includes(req.cookies.accessToken))
        return res.status(403).json({ message: "login again ! session expired" })
    jwt.verify(
        req.cookies.accessToken,
        process.env.JWT_ACCESS_USER_SECRET || "some random secret",
        async (err: any, decodedData: any) => {
            if (err) {
                return res.status(403).json({ message: "login again ! session expired" })
            }
            if (decodedData) {
                req.user = await User.findById(decodedData.id)
                next();
            }
        }
    );
});


// login
export const sendUserToken = (res: Response, accessToken: string) => {
    if (accessToken)
        UserTokens=[accessToken]
    const Expiry = Number(process.env.COOKIE_EXPIRE) || 1
    res.cookie("accessToken", accessToken, {
        maxAge: Expiry * 60 * 1000,//1 minute by default
        httpOnly: true,
        secure: false,
        sameSite: 'lax'
    });
}
//logout
export const deleteToken = async (res: Response, accessToken: string) => {
    UserTokens = UserTokens.filter((token) => token !== accessToken)
    const options = {
        maxAge: 0,
        httpOnly: true
    };
    res.cookie("accessToken", null, options);
};