'use strict';

const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Surprise extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User }) {
      this.belongsTo(User, { foreignKey: 'userId' });
    }
  }
  Surprise.init(
    {
      name: DataTypes.STRING,
      price: DataTypes.INTEGER,
      description: DataTypes.TEXT,
      image: DataTypes.STRING,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Surprise',
    },
  );
  return Surprise;
};
