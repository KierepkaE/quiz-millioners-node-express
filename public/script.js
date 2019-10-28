const question = document.getElementById('question');


function fillQuestionElements(data) {
  console.log(question.innerHTML)
  console.log(data.question)
  question.innerHTML = data.question;
  for (const i in data.answers) {
    const answerElement = document.getElementById(`answer${Number(i) + 1}`);
    answerElement.innerHTML = data.answers[i];
  }
}

function showNextQuestion() {
  fetch('/question', { method: 'GET' })
    .then(response => {
      return response.json();
    })
    .then(data => { fillQuestionElements(data) })
}


showNextQuestion();