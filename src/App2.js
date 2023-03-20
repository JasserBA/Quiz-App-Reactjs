import './App.css';
import React,{useEffect,useState} from 'react'

function App2() {
  function refreshPage() {
    window.location.reload(false);
  }
  const questions = [
    {
      questionText:'Which game features the character "Kratos"?',
      answerOptions:[
        {answerText:'Assassin\'s Creed', isCorrect:false},
        {answerText:'Elden Rings', isCorrect:false},
        {answerText:'Halo', isCorrect:false},
        {answerText:'God of War', isCorrect:true},
                    ],
    },
    {
      questionText:'In which year was the popular video game "Fortnite" first released?',
      answerOptions:[
        {answerText:'2014',isCorrect:false},
        {answerText:'2016', isCorrect:false},
        {answerText:'2017 ', isCorrect:true},
        {answerText:'2018', isCorrect:false},
      ],
    },
    {
      questionText:'What\'s the LoL mode for picking any champion, even if not owned?',
      answerOptions:[
        {answerText:'All Random All Mid (ARAM)',isCorrect:false},
        {answerText:'Draft Pick', isCorrect:false},
        {answerText:'Blind Pick', isCorrect:true},
        {answerText:'Nexus Blitz', isCorrect:false},
      ],
    },
    {
      questionText:'When was the PlayStation 5 released?',
      answerOptions:[
        {answerText:'November 2020',isCorrect:true},
        {answerText:'January 2021', isCorrect:false},
        {answerText:'March 2021', isCorrect:false},
        {answerText:'May 2021', isCorrect:false},
      ],
    },
  ]; 
  
  const [currentQuiestion,setCurrentQuestion]= useState(0);
  const [showScore, setShowScore]=useState(false);
  const [score,setScore]= useState(0);

  const handleAnswerOptionClick = (isCorrect) =>{
    if(isCorrect){
      setScore(score + 1);
    }
    const nextQuestion = currentQuiestion + 1;
    if (nextQuestion < questions.length){
      setCurrentQuestion(nextQuestion);
    }
    else{
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
      {showScore ?(
        <div className='score-section'>
          You scored {score} out of {questions.length}
          
          <div>
      <button className='playagain-button' onClick={refreshPage}>Play again!</button>
    </div>
        </div>
      ):(
        <>
        <div className='question-section'>
          <div className='question-count'>
            <span>Question {currentQuiestion +1}</span>/{questions.length}
          </div>
                <div className='question-text'>{questions[currentQuiestion].questionText}</div>
              <div className='answer-section'>
                    {questions[currentQuiestion].answerOptions.map((answerOption) => (
                      <button className='answer-button' onClick={() =>handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
                    ))}
              </div>
        </div>
        </>
      )}
      
    </div>
    
  );
}

export default App2;
