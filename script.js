let ignite = true
function cardChange() {
  const card = document.querySelector(".card")
  const bg = ignite ? "ignite" : "explorer"
  ignite = !ignite
  card.style.backgroundImage = `url(./assets/bg-${bg}.svg)`
}