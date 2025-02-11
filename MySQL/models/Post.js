module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define("Post", {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT, allowNull: false },
    image: { type: DataTypes.STRING },
    userId: { type: DataTypes.INTEGER, allowNull: false },
  });

  return Post;
};
