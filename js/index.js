console.clear();

let nameButton = document.getElementById("pressme");

nameButton.addEventListener("click", sayhi);

function sayhi() {
  console.log("hi");
  let userNameElement = document.getElementById("users-name");

  let myGreetingSpot = document.getElementById("greeting");
  myGreetingSpot.innerText = "Hello, " + userNameElement.value;
}
