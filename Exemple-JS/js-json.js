const jsonData = '{"personne": {"nom": "Doe", "age": 25, "hobbies": ["lire", "nager"]}}'

const jsObjet = JSON.parse(jsonData);

console.log(jsObjet.personne.hobbies);


const jsObject = { book: 'JSON Primer', price: 29.99, inStock: true, rating: null };
const jsonData = JSON.stringify(jsObject);
console.log(jsonData);

