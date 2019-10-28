const question = document.getElementById('question');
const gameBoard = document.getElementById('game-board');
const resultLine = document.getElementById('result');



function fillQuestionElements(data) {
  if (data.winner === true) {
    gameBoard.style.display = 'none';
    resultLine.innerText = 'Congratulations! You are the WINNER!!'
  }
  if (data.lose === true) {
    gameBoard.style.display = 'none';
    resultLine.innerText = 'Upss... try again!!'
  }
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
    .then(data => handleAnswer(data))
}

const buttons = document.querySelectorAll('answer');

for (const button of buttons) {
  button.addEventListener('click', (event) => {
    const answerIndex = event.target.dataset.answer;
    sendAnswer(answerIndex);
  })
}

const goodAnswersSpan = document.getElementById('correct-answers')
function handleAnswer(data) {
  goodAnswersSpan.innerText = data.goodAnswers;
  showNextQuestion();
}


function callToAFriend() {
  fetch('/tip/friend', { method: 'GET' })
    .then(response => response.json())
    .then(data => handleFriendAnswer(data))
}

const callFriend = document.getElementById('call-friend');
const tip = document.getElementById('tip');

callFriend.addEventListener('click', () => {
  callToAFriend();
})

function handleFriendAnswer(data) {
  tip.innerText = data.text;
}