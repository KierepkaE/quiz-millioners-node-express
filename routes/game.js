function gameRoutes(app) {
  let goodAnswers = 0;
  let isGameOver = false;
  let callToAFriendUsed = false;
  let askTheCrowdUsed = false;
  let reducedToHalfUsed = false;

  const questions = [
    {
      question: 'What is the best programming language?',
      answers: ['Swift', 'Kotlin', 'C++', 'Ruby'],
      correctAnswer: 3
    },
    {
      question: 'What is OOP?',
      answers: ['cloth brand', 'restaurant', 'paradigm', 'new BMW model'],
      correctAnswer: 2
    },
    {
      question: 'What\s the best way to learn programming?',
      answers: ['group work', 'writing code', 'copy + paste code', 'watching YouTube tutorials'],
      correctAnswer: 1
    }
  ]

  app.get('/question', (req, res) => {
    if (goodAnswers === questions.length) {
      res.json({
        winner: true
      })
    } else if (isGameOver) {

      res.json({
        lose: true
      })
    } else {
      const nextQuestion = questions[goodAnswers];
      const { question, answers } = nextQuestion;
      res.json({
        question, answers,
      })
    }
  })


  app.post('/answer/:index', (req, res) => {
    if (isGameOver) {
      res.json({
        lose: true
      })
    }
    const { index } = req.params;
    const question = questions[goodAnswers];
    const isCorrectAnswer = question.correctAnswer === Number(index);
    if (isCorrectAnswer) {
      goodAnswers++;
    } else {
      isGameOver = true;
    }

    res.json({
      correct: isCorrectAnswer,
      goodAnswers
    })
  });
}


module.exports = gameRoutes;