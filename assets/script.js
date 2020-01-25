$("#contactInfo").on("submit", (event) => {
event.preventDefault();
const nameInput = document.getElementById("nameInput").value;
const emailInput = document.getElementById("emailInput").value;
const messageInput = document.getElementById("messageInput").value;
console.log(nameInput, emailInput, messageInput)
  })