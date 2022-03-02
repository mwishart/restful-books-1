/*
These won't work: 
import * as axios from 'axios';
import {get, post} from 'axios';

3 possible solutions:
1) Use Axios globally
2) Use fetch (native JavaScript, modern, almost as easy)
3) Use Webpack
*/

console.log('Success!');

let restServer = 'http://localhost:3000/cars';

async function fetchData(url) {
  try {
    let response = await fetch(url);
    // response.ok is true if response.statusCode >= 200 && <=400
    if (response.ok) {
      let results = await response.json();
      console.log('Got results:', results);
      // renderTable(results);
    } else {
      console.log(`Could not find anything at ${url}`);
    }
  } catch (error) {
    console.error(`Couldn't fetch data because ${error}`);
  }
}

function renderTable(books) {
  let tableBody = document.querySelector('#books-container tbody');
}

fetchData(restServer);

export {};
