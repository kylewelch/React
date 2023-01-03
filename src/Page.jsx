import './App.css';
import Answers from './Answers'

export default function Page() {
  return (
    <div>
      <div className="progress">
        <div className="progress-bar"></div>
      </div>
      <h1>Testing this out</h1>
      <Answers />
      <button className="ContinueButton ContinueButton-disabled">CONTINUE</button>
    </div>
  )
}
