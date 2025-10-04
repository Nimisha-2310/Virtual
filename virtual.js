// --- Search Functionality ---
const searchBar = document.getElementById("searchBar");
const stateCards = document.querySelectorAll(".state-card");

if (searchBar) {
  searchBar.addEventListener("keyup", function () {
    let query = searchBar.value.toLowerCase();

    stateCards.forEach(card => {
      let stateName = card.querySelector("h1").innerText.toLowerCase();
      if (stateName.includes(query)) {
        card.style.display = "block";  // show card
      } else {
        card.style.display = "none";   // hide card
      }
    });
  });
}

