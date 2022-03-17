const Address = require('./Address');
const Author = require('./Author');
const Book = require('./Book');
const Library = require('./Library');
const LibraryInventory = require('./LibraryInventory');

Author.hasMany(Book, {
  foreignKey: 'authorId',
});

Book.belongsTo(Author, {
  foreignKey: 'authorId',
});

Library.belongsTo(Address, { foreignKey: 'addressId' });
Address.hasOne(Library, { foreignKey: 'addressId' });

Library.belongsToMany(Book, {
  through: { model: LibraryInventory },
  foreignKey: 'libraryId',
});
Book.belongsToMany(Library, {
  through: { model: LibraryInventory },
  foreignKey: 'bookId',
});

module.exports = {
  Address,
  Author,
  Book,
  Library,
  // LibraryInventory,
};
