import './App.css';
import Answer from './Answer'

export default function Answers({updateSelection, selectedAnswer, currentQuestion}) {
  const answers = ['one', 'two', 'three'];
  const answers2 = ['four', 'five', 'six'];
  const allAnswers = [answers, answers2];
  return (
    <div>
      { // for every item in the 'answers' list, create an Answer component
        allAnswers[currentQuestion].map((answer, index) => {
      return (
        <Answer 
          age={18}
          answerText={answer}
          answerNumber={index}
          key={index}
          updateSelection={updateSelection}
          selected={index === selectedAnswer}
          />
        )
      })}
    </div>
  )
}
