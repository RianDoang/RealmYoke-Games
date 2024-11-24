// Close Btn Nav
const input = document.getElementById("inputNav");
const closeBtn = document.getElementById("closeInputNav");

closeBtn.addEventListener("click", function () {
  input.value = "";

  // Tampilkan kembali semua game
  Array.from(games).forEach((game) => {
    game.style.display = "";
    updateButtons();
  });

  // Sembunyikan noneGame ketika input dikosongkan
  noneGame.classList.add("hidden");
  noneGame.classList.remove("flex");
});
// End Close Btn Nav

// Search Game
const searchInput = document.getElementById("inputNav");
const gameLists = document.querySelectorAll("#scrollContainer");
const noneGame = document.getElementById("noneGame");
let games = [];

gameLists.forEach((gameList) => {
  const gameItems = gameList.querySelectorAll(".popGame");
  games = games.concat(Array.from(gameItems));
});

searchInput.addEventListener("input", function () {
  const searchTerm = this.value.toLowerCase();
  let foundGame = false;

  games.forEach((game) => {
    const gameName = game.textContent.toLowerCase();

    if (gameName.includes(searchTerm)) {
      game.style.display = "";
      foundGame = true;

      scrollLeftButton.classList.add("bg-slate-600", "opacity-40");
      scrollLeftButton.classList.remove("hover:bg-amber-600");
      scrollLeftButton.disabled = true;
    } else {
      game.style.display = "none";

      scrollRightButton.classList.add("bg-slate-600", "opacity-40");
      scrollRightButton.classList.remove("hover:bg-amber-600");
      scrollRightButton.disabled = true;
    }
  });

  // Jika tidak ada game yang ditemukan
  if (!foundGame && searchTerm.trim() !== "") {
    console.log("Game tidak ditemukan");
    noneGame.classList.remove("hidden");
    noneGame.classList.add("flex");

    updateButtons();
  } else {
    console.log("Game ditemukan");
    noneGame.classList.add("hidden");
    noneGame.classList.remove("flex");

    updateButtons();
  }

  // Jika input dikosongkan, sembunyikan noneGame jika ada game ditemukan
  if (searchTerm.trim() === "") {
    if (games.some((game) => game.style.display !== "none")) {
      noneGame.classList.add("hidden");
      noneGame.classList.remove("flex");
    }
  }
});
// End Search game

// Scroll Left Right
const scrollContainer = document.getElementById("scrollContainer");
const scrollLeftButton = document.getElementById("scrollL");
const scrollRightButton = document.getElementById("scrollR");
const updateButtons = () => {
  if (scrollContainer.scrollLeft === 0) {
    scrollLeftButton.classList.add("bg-slate-600", "opacity-40");
    scrollLeftButton.classList.remove("hover:bg-amber-600");
    scrollLeftButton.disabled = true;
  } else {
    scrollLeftButton.classList.remove("bg-slate-600", "opacity-40");
    scrollLeftButton.classList.add("hover:bg-amber-600");
    scrollLeftButton.disabled = false;
  }

  if (
    scrollContainer.scrollLeft + scrollContainer.clientWidth >=
    scrollContainer.scrollWidth
  ) {
    scrollRightButton.classList.add("bg-slate-600", "opacity-40");
    scrollRightButton.classList.remove("hover:bg-amber-600");
    scrollRightButton.disabled = true;
  } else {
    scrollRightButton.classList.remove("bg-slate-600", "opacity-40");
    scrollRightButton.classList.add("hover:bg-amber-600");
    scrollRightButton.disabled = false;
  }
};

scrollLeftButton.addEventListener("click", () => {
  scrollContainer.scrollBy({ left: -200, behavior: "smooth" });
});

scrollRightButton.addEventListener("click", () => {
  scrollContainer.scrollBy({ left: 200, behavior: "smooth" });
});

scrollContainer.addEventListener("scroll", updateButtons);

updateButtons();
// End Scroll Left Right
