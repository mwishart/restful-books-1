let form = document.querySelector('#add-book-form');
let restServer = 'http://localhost:3000/books';

form.addEventListener('submit', (event) => {
  event.preventDefault();
  let bookFormData = new FormData(form);
  let book = {};
  for (let [key, value] of bookFormData.entries()) {
    book[key] = value;
  }

  fetch(restServer, {
    method: 'POST',
    body: JSON.stringify(book),
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        console.log('Bad response? ', response);
      }
    })
    .then((results) => console.log(`Added book with id ${results.id}`));
});

export {};
