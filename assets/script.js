$("#contactInfo").on("submit", (event) => {
event.preventDefault();
const nameInput = document.getElementById("nameInput").value.trim();
const emailInput = document.getElementById("emailInput").value.trim();
const messageInput = document.getElementById("messageInput").value.trim();
console.log(nameInput, emailInput, messageInput)
  })