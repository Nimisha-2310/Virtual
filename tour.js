document.getElementById("regionFilter").addEventListener("change", function () {
  const selected = this.value;
  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    if (selected === "all") {
      card.style.display = "block";
    } else if (card.classList.contains(selected)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});
