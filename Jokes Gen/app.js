const btnEl = document.querySelector(".btn");
const jokeEl = document.querySelector(".joke");
btnEl.addEventListener("click", getJoke);
const apiUrl = " https://api.api-ninjas.com/v1/dadjokes?limit=1";
const apiKey = "4F2KAKDMW6TgtQVpWvyO3w==7eDGlC7xljwB5NhZ";
const options = {
  method: "GET",
  headers: {
    "X-Api-Key": apiKey,
  },
};
async function getJoke() {
  try {
    jokeEl.innerText = await "Updating....";
    btnEl.disabled = true;
    btnEl.innerText = "Loading... ";
    const response = await fetch(apiUrl, options);
    const data = await response.json();
    btnEl.disabled = false;
    btnEl.innerText = "Tell Me a Joke ";
    const joke = data[0].joke;
    jokeEl.innerHTML = joke;
  } catch (error) {
    btnEl.disabled = false;
    btnEl.innerHTML = "Tell Me a Joke";
    jokeEl.innerHTML = " An error happened,try again later ";
  }
}
