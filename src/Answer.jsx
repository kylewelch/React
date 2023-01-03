import './App.css';

export default function Answer({ answerText, answerNumber}) {
  return (
    <button className="AnswerButton">{answerText}</button>
  )
}
