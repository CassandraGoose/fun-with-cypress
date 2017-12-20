const theButton = document.getElementById("#the-button")

theButton.addEventListener("click", yayFunction)

function yayFunction() {
  console.log('heyyy');
  const paragraph = document.getElementById("paragraph")
  const text = document.createTextNode("YAYYYYYY")
  paragraph.appendChild(text)
}
