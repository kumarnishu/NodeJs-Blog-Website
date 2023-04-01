import express from 'express';
import { CreateSection, DetailPage, HomePage, NewPost } from '../controllers/post.controller';
import { isAuthenticatedUser } from '../middlewares/auth.middleware';
const router = express.Router()


router.route("/").get(HomePage)
router.route("/:slug/:id").get(DetailPage)
router.route("/posts/create").post(isAuthenticatedUser, NewPost)
router.route("/section/create/:id").post(isAuthenticatedUser, CreateSection)

export default router;