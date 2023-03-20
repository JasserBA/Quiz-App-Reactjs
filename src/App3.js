import './App.css';
import React, { useEffect, useState } from 'react'

function App3() {
  function refreshPage() {
    window.location.reload(false);
  }
  const questions = [
    {
      questionText: 'What is the value of Pi (π) to two decimal places?',
      answerOptions: [
        { answerText: '3.14', isCorrect: true },
        { answerText: '2.72', isCorrect: false },
        { answerText: '1.61', isCorrect: false },
        { answerText: '4.39', isCorrect: false },
      ],
    },
    {
      questionText: 'What is the order of operations in mathematics? ',
      answerOptions: [
        { answerText: "+, -, *, /", isCorrect: false },
        { answerText: "*, /, +, -", isCorrect: true },
        { answerText: "-, +, /, *", isCorrect: false },
        { answerText: "/, *, -, +", isCorrect: false },
      ],
    },
    {
      questionText: 'What is the value of e^0?',
      answerOptions: [
        { answerText: '0', isCorrect: false },
        { answerText: '1', isCorrect: true },
        { answerText: 'e', isCorrect: false },
        { answerText: 'undefined', isCorrect: false },
      ],
    },
    {
      questionText: 'What is the derivative of 3x^2 with respect to x?',
      answerOptions: [
        { answerText: '5x', isCorrect: false },
        { answerText: 'x/2', isCorrect: false },
        { answerText: '6x', isCorrect: true },
        { answerText: '3x', isCorrect: false },
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

export default App3;
