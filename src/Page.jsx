import './App.css'
import {useState} from 'react'
import Answers from './Answers'

export default function Page() {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  function updateSelection(answer) {
    setSelectedAnswer(answer);
  }
  
  return (
    <div>
      
      <div className="progress">
        <div className="progress-bar"></div>
      </div>
      <h1>Testing this out</h1>
      <Answers 
        updateSelection={updateSelection}
        selectedAnswer={selectedAnswer}
      />
      <button className="ContinueButton ContinueButton-disabled">CONTINUE</button>
    </div>
  )
}
