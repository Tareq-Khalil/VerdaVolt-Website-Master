let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 7;

function checkGuess() {
  attempts--;
  const inputElement = document.getElementById("guess");
  const feedbackElement = document.getElementById("feedback");
  const prizeLink = document.getElementById("prizeLink");
  const guess = Number(inputElement.value);

  if (guess === randomNumber) {
    feedbackElement.innerHTML = " Congratulations! the voucher is SALE10";
    feedbackElement.style.color = "green";
    prizeLink.style.display = "block";
  } else if (guess < randomNumber) {
    feedbackElement.innerHTML = ` Too low! Try again. ${attempts} attempts remaining.`;
    feedbackElement.style.color = "red";
  } else {
    feedbackElement.innerHTML = ` Too high! Try again. ${attempts} attempts remaining.`;
    feedbackElement.style.color = "red";
  }

  if (attempts === 0 && guess !== randomNumber) {
    feedbackElement.innerHTML = ` Sorry, you're out of attempts! The correct number was ${randomNumber}.`;
    feedbackElement.style.color = "red";
    inputElement.disabled = true; 
  }
}
