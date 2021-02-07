const url ="https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";
const resultContainer = document.querySelector(".games");

async function getGames() {
  try {
    const response = await fetch(url);
    const arrayOfGames = await response.json();
    const games = arrayOfGames.results;
    console.log(arrayOfGames);

    console.log(games[0].tags);

    resultContainer.innerHTML = "";

    for (let i = 0; i <= games.length; i++) {
      console.log(games[i].name);
      console.log(games[i].rating);
      console.log(games[i].tags.length);

      if (i === 8) {
        break;
      }

      resultContainer.innerHTML += `<div class="result">${games[i].name}<br></br>${games[i].rating}<br></br>${games[i].tags.length}</div>`;
    }
  } catch (error) {
    resultContainer.innerHTML = displayError();
  }
}

getGames();
