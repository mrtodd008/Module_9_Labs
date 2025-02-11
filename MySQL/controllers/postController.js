const { Post, Like, Comment } = require("../models");

exports.createPost = async (req, res) => {
  try {
    const { title, description } = req.body;
    const newPost = await Post.create({
      title,
      description,
      userId: req.user.userId,
    });
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.likePost = async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id);
    await Like.create({ userId: req.user.userId, postId: post.id });
    res.json({ message: "Post liked" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
