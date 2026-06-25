async function loadCSV(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Kunne ikke laste ${url}: ${response.status} ${response.statusText}`);
    }
    const text = await response.text();
    return parseCSV(text);
}

function parseCSV(csv) {
    const lines = csv
        .trim()
        .split(/\r?\n/)
        .filter(line => line.trim() !== "");

    const headers = lines[0].split(";").map(h => h.trim());

    return lines.slice(1).map(line => {
        const values = line.split(";");
        const obj = {};

        headers.forEach((header, index) => {
            obj[header] = values[index] ? values[index].trim() : "";
        });

        return obj;
    });
}

function filterQuotes(rows, selectedCategory) {
    if (selectedCategory === "ALL") return rows;
    return rows.filter(row => row.category === selectedCategory);
}

function getCategoryMeta(categoryName, categories) {
    return categories.find(c => c.category === categoryName);
}