const inputEl = document.querySelector(".inputs");
const infoText = document.querySelector(".info-text");
const meaninEl = document.querySelector(".meaning-container");
const titleEl = document.querySelector(".title");
const meaningEl = document.querySelector(".meaning");
const audioEl = document.querySelector("audio");
const cont = document.querySelector(".container");

async function fetchAPI(word) {
  try {
    infoText.style.display = "block";
    infoText.innerHTML = `Searching the meaning of ${word}`;
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

    const result = await fetch(url).then((res) => res.json());

    if (result.title) {
      titleEl.innerHTML = word;
      meaningEl.innerHTML = "N/A";
      audioEl.style.display = "none";
    } else {
      infoText.style.display = "none";
      meaninEl.style.display = "block";
      audioEl.style.display = "inline-flex";
      titleEl.innerHTML = result[0].word;
      meaningEl.innerHTML = result[0].meanings[0].definitions[0].definition;
      audioEl.src = result[0].phonetics[0].audio;
    }
  } catch (error) {
    cont.innerHTML = ` An unexpeted Error Happened, Try again later `;
  }
}

inputEl.addEventListener("keyup", (e) => {
  if (e.target.value && e.key == "Enter") {
    fetchAPI(e.target.value);
  }
});
