const inputEl = document.querySelector(".inputs");
const Username = document.querySelector(".username");
const imgEl = document.querySelector(".user-img");
const mainCont = document.querySelector(".main-cont");
const bioEl = document.querySelector(".bio");
const followerEl = document.querySelector(".followers");
const followingEl = document.querySelector(".following");
const respoEl = document.querySelector(".respo");
const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
});
async function githubApi(username) {
  try {
    mainCont.style.display = "block";
    const url = "https://api.github.com/users/";
    const response = await fetch(url + username);
    const result = await response.json();
    imgEl.src = result.avatar_url;
    bioEl.innerHTML = result.bio;
    Username.innerHTML = result.login;
    followerEl.innerHTML = result.followers;
    followingEl.innerHTML = result.following;
    respoEl.innerHTML = result.public_repos;
    if (result.message) {
      mainCont.innerHTML = ` No record of ${username} found`;
    }
  } catch (error) {}
}

inputEl.addEventListener("keyup", (e) => {
  if (e.target.value && e.key == "Enter") {
    githubApi(e.target.value);
  }
});
