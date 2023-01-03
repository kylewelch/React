import './App.css';

export default function Answer({ answerText, answerNumber, updateSelection, selected}) {
  function selectAnswer() {
    updateSelection(answerNumber)
  }
  return (
    <button onClick={selectAnswer} className={selected ? "AnswerButton-selected" : "AnswerButton"}>{answerText}</button>
  )
}
