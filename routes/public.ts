import express from 'express';
import { DetailPage, HomePage } from '../controllers/public.controller';
const router = express.Router()


router.route("/").get(HomePage)
router.route("/:slug/:id").get(DetailPage)

export default router;