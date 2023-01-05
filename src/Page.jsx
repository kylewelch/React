import './App.css'
import {useState} from 'react'
import Answers from './Answers'
import ContinueButton from './ContinueButton'
import Feedback from './Feedback'

export default function Page() {
  const questions = ["Question 1?", "Question 2?", "Woohoo! You did it!"];
  const correctAnswers = [1, 0];
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [feedback, setFeedback] = useState(null);
  const [correctAnswer, setCorrectAnswer] = useState(false);
  const barLength = {
    width: currentQuestion / (questions.length - 1) * 100 + '%',
    minWidth: '20px'
  }
  function updateSelection(answer) {
    setSelectedAnswer(answer);
  }
  function checkAnswer() {
    if (selectedAnswer === correctAnswers[currentQuestion]) {
      setCorrectAnswer(true);
      setFeedback("Feedback-entrance");
    }
    else {
      setCorrectAnswer(false);
      setFeedback("Feedback-entrance")
    }
  }
  function nextQuestion() {
    setCurrentQuestion(currentQuestion + 1);
    setSelectedAnswer(null);
    setFeedback("Feedback-exit");
  }
  function dismissFeedback() {
    setFeedback("Feedback-exit");
    setSelectedAnswer(null);
  }
  return (
    <div>
      <div className="progress">
        <div className="progress-bar" style={barLength}></div>
      </div>
      <h1>{questions[currentQuestion]}</h1>
      {currentQuestion === (questions.length - 1) ? 
        <img className="celebration" src="https://i.imgur.com/ejNYw2X.png" alt="Celebration of your success" /> :
        <Answers 
          updateSelection={updateSelection}
          selectedAnswer={selectedAnswer}
          currentQuestion={currentQuestion}
        />
      }
      <ContinueButton 
        selectionMade={selectedAnswer !== null} 
        checkAnswer={checkAnswer}
      />
      <Feedback 
        feedback={feedback}
        correctAnswer={correctAnswer}
        dismissFeedback={dismissFeedback}
        nextQuestion={nextQuestion}
      />
    </div>
  )
}
