console.log('Success!');


let restServer = 'http://localhost:3000/books';

async function fetchData(url){
    let results = [];
    try{
        let response = await fetch(restServer);
        if(response.ok){
        let results = await fetch(restServer).json();
        console.log('Got results:', results);
        }
    } catch (error) {
        console.error("Couldn't fetch data because ${error}");
    }
    
}
function renderTable(books){
let tableBody = document.querySelector('#books-container tbody');
}

fetchData(restServer);
export {};
