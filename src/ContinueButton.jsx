import './App.css';

export default function ContinueButton({ selectionMade, checkAnswer }) {
  return (
    <button className={selectionMade ? "ContinueButton" : "ContinueButton-disabled"} onClick={selectionMade ? checkAnswer : null}>CHECK</button>
  )
}
