const { DataTypes } = require('sequelize');
const connection = require('./books-connection');
const Library = require('./Library');
const Book = require('./Book');

const LibraryInventory = connection.define(
  'LibraryInventory',
  {
    inventoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    libraryId: {
      type: DataTypes.INTEGER,
      references: {
        model: Library,
        key: 'library_id',
      },
    },
    bookId: {
      type: DataTypes.INTEGER,
      references: {
        model: Book,
        key: 'book_id',
      },
    },
    copies: DataTypes.INTEGER,
  },
  {
    tableName: 'libraries_inventories',
  }
);

module.exports = LibraryInventory;
