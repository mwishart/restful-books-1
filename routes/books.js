var express = require('express');
var router = express.Router();
const { Book } = require('../orm/books/books-models');

// GET /books/ -> [ array of books ]
router.get('/', async (req, res) => {
  try {
    let books = await Book.findAll();
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

// POST /books -> add a book
router.post('/', async (req, res) => {
  res.status(201).json({ id: 100, title: 'Not really' });
});

module.exports = router;
