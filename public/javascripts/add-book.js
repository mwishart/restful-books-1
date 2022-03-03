import { restServer } from './config.js';
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
    .then((results) => {
      console.log(`Added book with id ${results.id}`);
      let notifyElement = document.querySelector('#notifications');
      let message = document.createElement('p');
      message.classList.add('notification-fade');
      message.textContent = `Added book with id ${results.id}`;
      notifyElement.replaceChildren(message);
      setTimeout(() => message.classList.add('hidden'), 500);
      submitButton.disabled = false;
    });
});

export {};
