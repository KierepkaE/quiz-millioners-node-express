const question = document.getElementsByClassName('question');
const answer1 = document.getElementById('answer1');
const answer2 = document.getElementById('answer2');
const answer3 = document.getElementById('answer3');
const answer4 = document.getElementById('answer4');


function fillQuestionElements(data) {
  question.innerHTML = data.questions;
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