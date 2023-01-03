import './App.css';
import Answer from './Answer'

export default function Answers({updateSelection, selectedAnswer}) {
  const answers = ['one', 'two', 'three']
  return (
    <div>
      { // for every item in the 'answers' list, create an Answer component
        answers.map((answer, index) => {
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
