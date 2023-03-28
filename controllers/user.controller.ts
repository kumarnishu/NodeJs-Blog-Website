import { Request, Response, NextFunction } from 'express';
import { UserBody } from '../types/User';

export const SignUp = async (req: Request, res: Response, next: NextFunction) => {
    const { username, email, password } = req.body as UserBody
    if (!username || !email || !password)
        return res.status(400).json({ message: "fill all the required fields" });
    res.send("success")
}
