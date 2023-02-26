const btnEl = document.querySelector(".btn");
const riddleEl = document.querySelector(".riddle");
const answerEl = document.querySelector(".answer");

btnEl.addEventListener("click", getRiddle);
const apiKey = " 4F2KAKDMW6TgtQVpWvyO3w==7eDGlC7xljwB5NhZ";
const apiurl = " https://api.api-ninjas.com/v1/riddles";

const option = {
  method: "GET",
  headers: {
    "X-Api-Key": apiKey,
  },
};
async function getRiddle() {
  riddleEl.innerHTML = ` Updating...`;
  answerEl.innerHTML = ` Updating... `;
  btnEl.innerHTML = ` Loading... `;
  const response = await fetch(apiurl, option);
  const data = await response.json();
  console.log(data);
  const joke = data[0].question;
  const answer = data[0].answer;
  riddleEl.innerHTML = joke;
  answerEl.innerHTML = answer;
  btnEl.innerHTML = ` Tell Me a Riddle `;
}
