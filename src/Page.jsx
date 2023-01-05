import './App.css'
import {useState} from 'react'
import Answers from './Answers'
import ContinueButton from './ContinueButton'

export default function Page() {
  const questions = ["Question 1?", "Question 2?", "Woohoo, you did it!"];
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  function updateSelection(answer) {
    setSelectedAnswer(answer);
  }
  function nextQuestion() {
    setCurrentQuestion(currentQuestion + 1);
    setSelectedAnswer(null);
  }
  return (
    <div>
      <div className="progress">
        <div className="progress-bar"></div>
      </div>
      <h1>{questions[currentQuestion]}</h1>
      <Answers 
        updateSelection={updateSelection}
        selectedAnswer={selectedAnswer}
        currentQuestion={currentQuestion}
      />
      <ContinueButton 
        selectionMade={selectedAnswer !== null} 
        nextQuestion={nextQuestion}
      />
    </div>
  )
}
