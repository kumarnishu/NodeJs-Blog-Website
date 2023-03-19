const express = require("express")
const { HomePage, DetailPage, NewPost, UpdatePost, DeletePost, PublishToogle } = require("../controllers/post.controller")
const multer = require("multer");
const upload = multer({ dest: 'uploads' })

const router = express.Router()

router.route("/").get(HomePage)
router.route("/posts/:slug/:id").get(DetailPage)
router.route("/posts/").post(NewPost)
router.route("/posts/").put(UpdatePost)
router.route("/posts/").delete(DeletePost)
router.route("/posts/").patch(PublishToogle)

module.exports = router