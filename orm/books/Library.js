const { DataTypes } = require('sequelize');
const connection = require('./books-connection');
const Address = require('./Address');

const Library = connection.define('Library', {
  libraryId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  addressId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Address,
      key: 'address_id',
    },
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Library;
