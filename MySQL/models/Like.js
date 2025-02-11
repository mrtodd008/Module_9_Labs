module.exports = (sequelize, DataTypes) => {
  const Like = sequelize.define("Like", {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    userId: { type: DataTypes.INTEGER, allowNull: false },
    postId: { type: DataTypes.INTEGER, allowNull: false },
  });

  return Like;
};
