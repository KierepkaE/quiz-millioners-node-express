function gameRoutes(app) {
  let goodAnswers = 0;
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
    } else {
      const nextQuestion = questions[goodAnswers];
      const { question, answers } = nextQuestion;
      res.json({
        question, answers,
      })
    }
  })
}