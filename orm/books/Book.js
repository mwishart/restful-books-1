const { DataTypes } = require('sequelize');
const connection = require('./books-connection');
const Author = require('./Author');

const Book = connection.define('Book', {
  bookId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  year: DataTypes.INTEGER,
  authorId: {
    type: DataTypes.INTEGER,
    references: {
      model: Author,
      key: 'author_id',
    },
  },
});

module.exports = Book;
