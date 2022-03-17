const { DataTypes } = require('sequelize');
const connection = require('./books-connection');

const Author = connection.define('Author', {
  authorId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  firstName: DataTypes.STRING,
  lastName: DataTypes.STRING,
  commonName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Author;
