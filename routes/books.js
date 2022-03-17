var express = require('express');
var router = express.Router();
const { Book, Author } = require('../orm/books/books-models');

// GET /books/ -> [ array of books ]
router.get('/', async (req, res) => {
  try {
    let books = await Book.findAll({
      include: { model: Author, as: 'author' },
    });
    res.json(books);
  } catch (error) {
    res.status(500).send('Book fetching failed');
  }
});

// GET /books/:id -> matching book or 404
router.get('/:id', async (req, res) => {
  try {
    let book = await Book.findByPk(req.params.id);
    if (book) {
      res.json(book);
    } else {
      res.status(404).send(`Could not find book for id ${req.params.id}`);
    }
  } catch (error) {
    res.status(500).send('Book fetching failed');
  }
});

// Step 2, specifically answering on '/'
// POST /books -> add a book
router.post('/', async (req, res) => {
  let protoBook = req.body;

  try {
    // Security alert: not validating inputs!
    // Steps 3-7 are right here, due to the configuration of Sequelize
    // You can also look at orm/books/books-connection and orm/books/Book.js
    let model = await Book.create(protoBook);

    // Step 8
    res.status(201).json(model);
  } catch (error) {
    res.status(500).send('Book fetching failed');
  }
});

module.exports = router;
