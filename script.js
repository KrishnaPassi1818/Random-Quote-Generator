let quoteOnScreen = document.querySelector("#quote")
let author = document.querySelector("#author")
let generateBtn = document.querySelector("#generateBtn")

let api = "https://dummyjson.com/quotes"
let quotes = []

generateBtn.addEventListener("click", setQuote)

function setQuote() {
    let idx = Math.floor(Math.random() * 30)
    quoteOnScreen.innerHTML = quotes[idx].quote
    author.innerHTML = quotes[idx].author
}

async function getQuotes() {
    let response = await fetch(api)
    let data = await response.json()
    quotes = data.quotes
    console.log(data);
}

getQuotes();