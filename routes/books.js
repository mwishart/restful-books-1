var express = require('express');
var router = express.Router();

const books = [
  {
    id: '1',
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    authorId: '1',
    year: 1925,
  },
  {
    id: '2',
    title: 'Clifford, the Big Red Dog',
    author: 'Norman Bridwell',
    authorId: '2',
    year: 1963,
  },
];

// GET /books/ -> [ array of books ]
router.get('/', (req, res) => {
  let bookList = '';
  for (let book of books) {
    // bookList += `${book.title} by ${book.author}<br>`;
    bookList = bookList + `${book.title} by ${book.author}<br>`;
  }
  res.send(`Here's an array of books: ${bookList}`);
});

router.get('/gatsby', (req, res) => {
  res.send('The Great Gatsby');
});

router.get('/harry-potter', (req, res) => {
  res.send('Harry Potter and the Chamber of Secrets');
});

module.exports = router;
