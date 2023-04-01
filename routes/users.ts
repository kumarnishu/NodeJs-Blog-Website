import express from "express";
import { Login, Logout, Signup, ResetPassword, SendPasswordResetMail, SendVerifyEmail, updatePassword,  VerifyEmail } from "../controllers/user.controller";
import { isAuthenticatedUser } from "../middlewares/auth.middleware";

const router = express.Router()

router.post("/users",Signup)
router.route("/update/password").patch(isAuthenticatedUser, updatePassword)
router.post("/login", Login)
router.post("/logout", Logout)
router.post("/email/verify", isAuthenticatedUser, SendVerifyEmail)
router.patch("/email/verify/:token", VerifyEmail)
router.post("/password/reset", SendPasswordResetMail)
router.patch("/password/reset/:token", ResetPassword)

export default router;