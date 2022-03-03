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

let nextBookId = 3;
let nextAuthorId = 3;

// GET /books/ -> [ array of books ]
router.get('/', (req, res) => {
  res.json(books);
});

router.post('/', (req, res) => {
  // title, author, year, no ids
  console.log('req.body:', req.body);
  let bookProto = req.body;

  bookProto.id = nextBookId + '';
  bookProto.authorId = nextAuthorId + '';
  nextBookId += 1;
  nextAuthorId += 1;

  books.push(bookProto);
  res.json(bookProto);
});

router.get('/gatsby', (req, res) => {
  res.send('The Great Gatsby');
});

router.get('/harry-potter', (req, res) => {
  res.send('Harry Potter and the Chamber of Secrets');
});

module.exports = router;
