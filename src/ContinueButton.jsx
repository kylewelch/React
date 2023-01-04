import './App.css';

export default function ContinueButton({ selectionMade, nextQuestion }) {
  return (
    <button className={selectionMade ? "ContinueButton" : "ContinueButton-disabled"} onClick={selectionMade ? nextQuestion : null}>CONTINUE</button>
  )
}
