import { restServer } from './config.js';

// Fetch the authors list from ... the authors route!
let authorsResponse = await fetch('/authors');
let authors = await authorsResponse.json();
let authorOptions = authors.map((author) => {
  let option = document.createElement('option');
  option.setAttribute('value', author.authorId);
  option.textContent = author.commonName;
  return option;
});
let selectList = document.querySelector('#book-author');
selectList.replaceChildren(...authorOptions);
selectList.disabled = false;

let form = document.querySelector('#add-book-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  let submitButton = form.querySelector('[type=submit]');
  submitButton.disabled = true;
  let bookFormData = new FormData(form);
  let book = {};
  for (let [key, value] of bookFormData.entries()) {
    book[key] = value;
  }

  // Steps found at https://github.com/EICPCohort5/awesome-cohort/blob/main/week-5-project.md
  // Step 1
  // Next step is in app.js and routes/books.js
  fetch(restServer, {
    method: 'POST',
    body: JSON.stringify(book),
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => {
      // Step 9
      if (response.ok) {
        return response.json();
      } else {
        console.log('Bad response? ', response);
      }
    })
    .then((results) => {
      // Step 10
      console.log(`Added book with id ${results.id}`);
      let notifyElement = document.querySelector('#notifications');
      let message = document.createElement('p');
      message.classList.add('notification-fade');
      message.textContent = `Added book with id ${results.bookId}`;
      notifyElement.replaceChildren(message);
      setTimeout(() => message.classList.add('hidden'), 500);
      submitButton.disabled = false;
    });
});

export {};
