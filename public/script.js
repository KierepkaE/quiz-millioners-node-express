function showNextQuestion() {
  fetch('/question', 'GET')
    .then(data => { console.log(data) })
}


showNextQuestion();