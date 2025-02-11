const express = require("express");
const {
  createPost,
  likePost,
  commentPost,
} = require("../controllers/postController");
const authMiddleware = require("../Middleware/authMiddleware");
const router = express.Router();

router.post("/", authMiddleware, createPost);
router.put("/:id/like", authMiddleware, likePost);
router.post("/:id/comment", authMiddleware, commentPost);

module.exports = router;
