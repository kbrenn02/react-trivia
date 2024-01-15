import { useState } from 'react';
import './App.css'
import TriviaCard from './components/TriviaCard'
import Score from './components/Score';

function App() {
  
    // The navigation buttons work here to change the question number. The question number is then used in
    // the Trivia card as the index that will then pull in questions and answers
    const [questionNumber, setQuestionNumber] = useState(1)
    const [isQuestion, setIsQuestion] = useState(true);

    function handlePrev() {
        if (questionNumber >=2) {
            setQuestionNumber(questionNumber-1);
        }
        setIsQuestion(true);
    }

    function handleNext() {
        if (questionNumber <= 19) {
            setQuestionNumber(questionNumber+1);
        }
        setIsQuestion(true);
    }

    return (
        <>  
            <div className = "flex-container">
                <div className = "flex-child">
                    <Score />
                    <button className="previous" onClick={handlePrev}>Previous Question</button>
                    <button className="next" onClick={handleNext}>Next Question</button>
                </div>
                <div className = "flex-child">
                    <TriviaCard index={questionNumber-1} isQuestion={isQuestion} setIsQuestion={setIsQuestion}/>
                </div>
            </div>
            
        </>
    )
}

export default App;
