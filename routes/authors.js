var express = require('express');
var router = express.Router();
const { Author } = require('../orm/books/books-models');

// GET /authors/ -> [ array of authors ]
router.get('/', async (req, res) => {
  try {
    let authors = await Author.findAll();
    res.json(authors);
  } catch (error) {
    res.status(500).send('Author fetching failed');
  }
});

// GET /books/:id -> matching book or 404
router.get('/:id', async (req, res) => {
  try {
    let author = await Author.findByPk(req.params.id);
    if (author) {
      res.json(author);
    } else {
      res.status(404).send(`Could not find author for id ${req.params.id}`);
    }
  } catch (error) {
    res.status(500).send('Author fetching failed');
  }
});

module.exports = router;
