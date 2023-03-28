import express from 'express';
const router = express.Router()
const { HomePage, DetailPage } = require("../controllers/post.controller")


router.route("/").get(HomePage)
router.route("/:slug/:id").get(DetailPage)
export default router;