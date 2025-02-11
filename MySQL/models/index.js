const Sequelize = require("sequelize");
const sequelize = require("../config/db");

const User = require("./User")(sequelize, Sequelize);
const Post = require("./Post")(sequelize, Sequelize);
const Comment = require("./Comment")(sequelize, Sequelize);
const Like = require("./Like")(sequelize, Sequelize);

// Associations
User.hasMany(Post, { foreignKey: "userId" });
Post.belongsTo(User, { foreignKey: "userId" });

User.hasMany(Comment, { foreignKey: "userId" });
Comment.belongsTo(User, { foreignKey: "userId" });

Post.hasMany(Comment, { foreignKey: "postId" });
Comment.belongsTo(Post, { foreignKey: "postId" });

User.hasMany(Like, { foreignKey: "userId" });
Post.hasMany(Like, { foreignKey: "postId" });

sequelize.sync({ alter: true });

module.exports = { sequelize, User, Post, Comment, Like };
