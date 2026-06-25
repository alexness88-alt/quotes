let categories = [];
let allQuotes = [];
let authors = [];

const categorySelect = document.getElementById("categoryselect");
const quoteElement = document.getElementById("quote");
const chineseQuoteElement = document.getElementById("chinesequote");
const genQuoteButton = document.getElementById("genquote");

function buildDropdown() {
    categorySelect.innerHTML =
        `<option value="ALL">Alle kategorier</option>` +
        categories.map(c =>
            `<option value="${c.category}">${c.category}</option>`
        ).join("");
}

function setCategoryByWeekday() {
    const today = new Date();
    const jsDay = today.getDay(); // 0 = søndag, 1 = mandag ... 6 = lørdag
    const dayNumber = jsDay === 0 ? 7 : jsDay;

    const match = categories.find(c => Number(c.day) === dayNumber);

    if (match) {
        categorySelect.value = match.category;
        chineseQuoteElement.textContent = match.original || "";
    } else {
        categorySelect.value = "ALL";
        chineseQuoteElement.textContent = "";
    }
}

function genQuote() {
    const selectedCategory = categorySelect.value;
    const filteredQuotes = filterQuotes(allQuotes, selectedCategory);

    if (filteredQuotes.length === 0) {
        quoteElement.innerHTML = `<p>Ingen quotes i denne kategorien.</p>`;
        chineseQuoteElement.textContent = "";
        return;
    }

    const randNum = Math.floor(Math.random() * filteredQuotes.length);
    const q = filteredQuotes[randNum];

    quoteElement.innerHTML = `
        <h1>“${q.quote || ""}”</h1>
        <h3>${q.metaquote || ""}</h3>
        <h2 style="font-style: italic;">— ${q.author || ""}</h2>
    `;

    const categoryMeta =
        selectedCategory === "ALL"
            ? null
            : getCategoryMeta(selectedCategory, categories);

    chineseQuoteElement.textContent = categoryMeta?.original || "";
}

async function initApp() {
    try {
        [categories, allQuotes, authors] = await Promise.all([
            loadCSV("data/categories.csv"),
            loadCSV("data/quotes.csv"),
            loadCSV("data/authors.csv")
        ]);

        buildDropdown();
        setCategoryByWeekday();
        genQuote();

        categorySelect.addEventListener("change", genQuote);
        genQuoteButton.addEventListener("click", genQuote);
    } catch (error) {
        console.error("Feil ved initialisering:", error);
        quoteElement.innerHTML = `<p>Feil ved lasting av data.</p>`;
        chineseQuoteElement.textContent = "";
    }
}

document.addEventListener("DOMContentLoaded", initApp);
``