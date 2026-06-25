const csvCategories = `
category;day;proverb;original
Barn og foreldrerollen;6;Actions speak louder than words;言传不如身教
Holdning og livsfilosofi;1;Learning without thinking is useless – thinking without learning is dangerous;学而不思则罔，思而不学则殆
Selvfølelse;2;Compare yourself to who you were yesterday, not to who someone else is today;不与人比，与己比
Selvrefleksjon, mening og selvutvikling;3;Å kjenne andre er klokskap – å kjenne seg selv er sann innsikt;知人者智，自知者明
Sosialt samspill;4;Meet others with sincerity;以诚待人
Stress- og angstmestring;5;Mountains are high, rivers long;山高水长
`;

const csvQuotes = `
quote;metaquote;author;source;category;originalquote;20260619
Oppmuntre Adrian til å være nysgjerrig;Vis Adrian at verden kan være et spennende og magisk sted;Alexander Næss;;Barn og foreldrerollen;
Sørg for at Adrian får tid til å utforske i eget tempo;;Alexander Næss;;Barn og foreldrerollen;
Tren på å se ting fra Adrians perspektiv;;Alexander Næss;;Barn og foreldrerollen;
Gi Adrian tilbakemeldinger i stedet for ros;;Alexander Næss;;Barn og foreldrerollen;
Vis forståelse for Adrians følelser;;ICDP;ICDP;Barn og foreldrerollen;
`;

const csvAuthors = `
author;year
Albert Einstein;1879 – 1955
Alexander Næss;1988 – nå
Alfred Adler;1870 – 1937
Anaïs Nin;1903 – 1977
Carl Gustav Jung;1875 – 1961
`;

const categories = parseCSV(csvCategories);
const allQuotes = parseCSV(csvQuotes);
const authors = parseCSV(csvAuthors);