import './App.css'

export default function ContinueButton({ nextQuestion }) {
  return (
    <button className="ContinueButton ContinueButton-disabled" onClick={nextQuestion}>CONTINUE</button>
  )
}
