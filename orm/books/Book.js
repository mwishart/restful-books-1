const { DataTypes } = require('sequelize');
const connection = require('./books-connection');
const Author = require('./Author');

// Steps 4-6 also occur here, because Sequelize does the hard work for us
const Book = connection.define('book', {
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
