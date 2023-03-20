import './App.css';
import React, { useEffect, useState } from 'react'

function App() {
  function refreshPage() {
    window.location.reload(false);
  }
  const questions = [
    {
      questionText: 'Who is the highest goal scorer in the history of football?',
      answerOptions: [
        { answerText: 'Lionel Messi', isCorrect: false },
        { answerText: 'Pele', isCorrect: false },
        { answerText: 'Cristiano Ronaldo ', isCorrect: true },
        { answerText: 'Diego Maradona', isCorrect: false },
      ],
    },
    {
      questionText: 'Which team has never won the Champions League?',
      answerOptions: [
        { answerText: 'Manchester City', isCorrect: true },
        { answerText: 'Liverpool', isCorrect: false },
        { answerText: 'Arsenal', isCorrect: false },
        { answerText: 'AC Milan', isCorrect: false },
      ],
    },
    {
      questionText: 'Which team has won the most World Cups?',
      answerOptions: [
        { answerText: 'England', isCorrect: false },
        { answerText: 'Germany', isCorrect: false },
        { answerText: 'Spain', isCorrect: false },
        { answerText: 'Brazil', isCorrect: true },
      ],
    },
    {
      questionText: 'Who was the top scorer of the 2018 FIFA World Cup?',
      answerOptions: [
        { answerText: 'Cristiano Ronaldo', isCorrect: false },
        { answerText: 'Neymar Jr', isCorrect: false },
        { answerText: 'Harry Kane', isCorrect: true },
        { answerText: 'Lionel Messi', isCorrect: false },
      ],
    },
  ];

  const [currentQuiestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuiestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    }
    else {
      setShowScore(true);
    }
  };
  useEffect(() => {
    console.log('useEffect running');
    const scoreSection = document.getElementsByClassName('score-section')[0]
    if (scoreSection && score === 4) {
      scoreSection.style.boxShadow = '10px 10px 60px 10px green';
    }
  }, [score]);

  return (

    <div className="App">
      {showScore ? (
        <div className='score-section'>
          You scored {score} out of {questions.length}

          <div>
            <button className='playagain-button' onClick={refreshPage}>Play again!</button>
          </div>
        </div>
      ) : (
        <>
          <div className='question-section'>
            <div className='question-count'>
              <span>Question {currentQuiestion + 1}</span>/{questions.length}
            </div>
            <div className='question-text'>{questions[currentQuiestion].questionText}</div>
            <div className='answer-section'>
              {questions[currentQuiestion].answerOptions.map((answerOption) => (
                <button className='answer-button' onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
              ))}
            </div>
          </div>
        </>
      )}

    </div>

  );
}

export default App;
