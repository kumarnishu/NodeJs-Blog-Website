import express from 'express';
import {SignUp } from '../controllers/user.controller';
const router = express.Router()

router.post("/signup",SignUp)

export default router;