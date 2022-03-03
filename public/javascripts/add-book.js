let form = document.querySelector('add-book-form');

form.addEventListener('submit', (event) =>{
    event.preventDefault();
    let bookFormData = new FormData(form);
    console.log(
        'JSON conversion of the FormData',
        JSON.stringify(bookFormData)
    );
});

export{};