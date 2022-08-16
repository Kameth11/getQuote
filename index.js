// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "c0ce55d9b9msh1b9c61528a278e3p18bf36jsndb7312587efa",
//     "X-RapidAPI-Host": "car-data.p.rapidapi.com",
//   },
// };

// fetch("https://car-data.p.rapidapi.com/cars/types", options)
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));

// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "c0ce55d9b9msh1b9c61528a278e3p18bf36jsndb7312587efa",
//     "X-RapidAPI-Host": "car-data.p.rapidapi.com",
//   },
// };

// fetch("https://car-data.p.rapidapi.com/cars?limit=10&page=0", options)
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));

/***
 *
 * ESTO ES DE QUOTES PROXIMO PROYECTO
 *
 */ ////////////////////////////////////////////////////////

const btnquote = document.getElementById("btnquote");
const getQuote = document.querySelector(".getQuote");
const quote = document.querySelector(".quote");
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "c0ce55d9b9msh1b9c61528a278e3p18bf36jsndb7312587efa",
    "X-RapidAPI-Host": "quotes15.p.rapidapi.com",
  },
};
var language = "es";
fetch(
  `https://quotes15.p.rapidapi.com/quotes/random/?language_code=${language}`,
  options
)
  .then((response) => response.json())
  .then((res) => getButton(res))
  .catch((err) => console.error(err));

// ${(a.target.innerHTML = res.originator.name)}
function getButton(res) {
  btnquote.addEventListener("click", () => `${getQuoteButton(res)}`);
  // btnquote.addEventListener("click", () => console.log("asd"));
  //console.log(a.target);
  // console.log("asd");
  // btnquote.addEventListener("click", getQuoteButton());
}

function getQuoteButton(res) {
  // console.log(res);
  // console.log("asd");
  const createContentDiv = document.createElement("div");
  createContentDiv.innerHTML = `${res.content}`;
  const createh2 = document.createElement("h2");
  createh2.innerHTML = `${res.originator.name}`;
  const createh3 = document.createElement("h3");
  createh3.innerHTML = `${res.tags}`;
  getQuote.append(createContentDiv, createh2, createh3);
}

/////////////////////////////////////////////////////////////////
// getQuote.innerHTML = `
// <h3>${res.content}</h3>
// <h5>${res.originator.name}</h5>
// <h5>${res.tags}</h5>
// `;
// getQuote.className = `testFontSize`;
// }
