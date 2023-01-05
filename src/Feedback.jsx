import './App.css';

export default function Feedback({ feedback, correctAnswer, dismissFeedback, nextQuestion }) {
  return (
    <div className={"Feedback " + feedback}>
      <div className="Feedback-content">
        <h2 className={correctAnswer ? "Feedback-title" : "Feedback-title-incorrect"}>{correctAnswer ? "That's right!" : "Oops, try again"}</h2>
        <button className={correctAnswer ? "FeedbackButton" : "FeedbackButton-incorrect"} onClick={correctAnswer ? nextQuestion : dismissFeedback}>{correctAnswer ? "CONTINUE" : "TRY AGAIN"}</button>
      </div>
    </div>
  )
}
