const btnEl = document.querySelector(".btn");
const animeCont = document.querySelector(".anime-container");
const animeImg = document.querySelector(".anime-img");
const animeName = document.querySelector(".anime-name");
btnEl.addEventListener("click", getAnime);

async function getAnime() {
  try {
    btnEl.disabled = true;
    btnEl.innerHTML = ` Loading...`;
    const response = await fetch("https://api.catboys.com/img");

    const data = await response.json();
    animeCont.style.display = "block";
    animeImg.src = data.url;
    animeName.innerHTML = data.artist;
    btnEl.disabled = false;
    btnEl.innerHTML = ` Get Anime `;
  } catch (error) {
    btnEl.disabled = false;
    btnEl.innerHTML = ` Get Anime `;
    animeName.innerHTML = ` An error happened, please try again later`;
  }
}
