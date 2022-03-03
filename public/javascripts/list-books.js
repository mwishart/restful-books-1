/*
These won't work: 
import * as axios from 'axios';
import {get, post} from 'axios';

3 possible solutions:
1) Use Axios globally
2) Use fetch (native JavaScript, modern, almost as easy)
3) Use Webpack
*/

import { restServer } from './config.js';

async function fetchData(url) {
  try {
    let response = await fetch(url);
    // response.ok is true if response.statusCode >= 200 && <=400
    if (response.ok) {
      let results = await response.json();
      console.log('Got results:', results);
      renderTable(results);
    } else {
      console.log(`Could not find anything at ${url}`);
    }
  } catch (error) {
    console.error(`Couldn't fetch data because ${error}`);
  }
}

function renderTable(books) {
  let tableBody = document.querySelector('#books-container tbody');
  let rows = [];
  for (let book of books) {
    let row = document.createElement('tr');
    row.insertAdjacentHTML(
      `beforeend`,
      `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.year}</td>
    `
    );
    rows.push(row);
  }
  tableBody.append(...rows);
}

fetchData(restServer);

export {};
