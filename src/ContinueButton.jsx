import './App.css';

export default function ContinueButton({ selectionMade }) {
  return (
    <button className={selectionMade ? "ContinueButton" : "ContinueButton-disabled"}>CONTINUE</button>
  )
}
