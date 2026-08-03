function checkAnswer(answer) {
  const result = document.getElementById("result");

  if (!result) {
    return;
  }

  if (answer === "A") {
    result.textContent =
      "Correct. This has several signs of a phishing attack: urgency, a request " +
      "to enter your password, and a link you weren't expecting.";
    result.style.color = "#4caf50";
  } else {
    result.textContent =
      "Not quite. Routine backups and updates shouldn't ask you to click a link " +
      "and enter your password urgently. Treat messages like this as suspicious.";
    result.style.color = "#ff5252";
  }
}