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

function sendAnswer(answerIndex) {
  fetch(`/answer/${answerIndex}`, { method: 'POST' })
    .then(response => response.json())
    .then(data => console.log(data))
}

const buttons = document.querySelectorAll('button');

for (const button of buttons) {
  button.addEventListener('click', (event) => {
    const answerIndex = event.target.dataset.answer;
    sendAnswer(answerIndex);
  })
}