function checkAnswer(answer) {

    let result = document.getElementById("result");

    if (answer === "A") {
        result.innerHTML = "✅ Correct! Phishing is a cyber attack designed to steal information.";
        result.style.color = "green";
    }
    else {
        result.innerHTML = "❌ Incorrect. Try again.";
        result.style.color = "red";
    }

}