import {useState} from 'react';
import './App.css';
import ProgressBar from './ProgressBar';
import ContinueButton from './ContinueButton';
import AnswerButton from './AnswerButton';

export default function Page() {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const questions = ["How do you say 'yes' in French?", "How do you say 'cheese' in French?"]
  function nextQuestion() {
    setCurrentQuestion(currentQuestion + 1);
  }
  return (
    <div>
      <ProgressBar 
        question={currentQuestion} 
      />
      <h1>Testing this out</h1>
      <AnswerButton />
      <AnswerButton />
      <AnswerButton />
      <ContinueButton 
        nextQuestion={nextQuestion} />
    </div>
  )
}
