const form = document.getElementById("myform");
const quoteList = document.getElementById("quote_list");
const quote = document.getElementById("quote");
const button = document.getElementById("button_quote");


const text = document.getElementsByClassName(".text").value;
const author = document.getElementsByName("name_author").value;

form.addEventListener('change', afficherCitationAuteur);
function afficherCitationAuteur(e) {
    console.log(e.target.value)
}

function addQuote(quote, author){
    quote = document.createElement('p')
    author = document.createElement('p')
   quote.innerText = quote.value
   author.classList.add("author");

  addQuote.body.appendChild();
}