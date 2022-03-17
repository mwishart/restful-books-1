const { DataTypes } = require('sequelize');
const connection = require('./books-connection');

const Address = connection.define('Address', {
  addressId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  street: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  postcode: DataTypes.STRING,
  province: DataTypes.STRING,
  country: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Address;
