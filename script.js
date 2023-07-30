const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");

const apiKey = "dQ6t8mEWUzPGiKg3EebeDzNn9dp7iuCnDO4v2I7h"

const options = {
  method: "GET",
  headers: {
    "X-Api-Key": apiKey,
  },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1"

async function getJoke() {
  try {
    jokeEl.innerText = "Fun updating...🤪";
    btnEl.disabled = true;
    btnEl.innerText = "Loading...";

    const response = await fetch(apiURL, options);
    const data = await response.json();

    btnEl.disabled = false;
    btnEl.innerText = "Click for Dad Humor";

    jokeEl.innerText = data[0].joke;
  } catch (error) {
    jokeEl.innerText = "An error occured 🙁 try again later";
    btnEl.disabled = false;
    btnEl.innerText = "Click for Dad Humor";
    console.log(error);
  }
}

btnEl.addEventListener("click", getJoke);
