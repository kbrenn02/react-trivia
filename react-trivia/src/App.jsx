import { useState } from 'react';
import './App.css'
import TriviaCard from './components/TriviaCard'
import Score from './components/Score';

function App() {
  
    // The navigation buttons work here to change the question number. The question number is then used in
    // the Trivia card as the index that will then pull in questions and answers
    const [questionNumber, setQuestionNumber] = useState(1)
    // The isQuestion is defined here so the next and prev buttons can update it's state. It is then passed into TriviaCard function
    const [isQuestion, setIsQuestion] = useState(true);

    // two things occur when the previous button is selected: the question number is reduced, and the isQuestion is
    // set to true so that when the button is clicked, it will show the previous question no matter the current state
    // of the card
    function handlePrev() {
        if (questionNumber >=2) {
            setQuestionNumber(questionNumber-1);
        }
        setIsQuestion(true);
    }

    // question number is increased by 1 and the isQuestion state is updated
    function handleNext() {
        if (questionNumber <= 19) {
            setQuestionNumber(questionNumber+1);
        }
        setIsQuestion(true);
    }

    return (
        <>  
            <div className = "flex-container">
                <div className = "flex-child"> {/* child 1 contains score and all buttons*/}
                    <Score />
                    {/* these buttons call the above functions on click */}
                    <button className="previous" onClick={handlePrev}>Previous Question</button>
                    <button className="next" onClick={handleNext}>Next Question</button>
                </div>
                <div className = "flex-child"> {/* child 2 contains questions and headers */}
                    {/* TriviaCard takes 3 props: index for the question number, the state of isQuestion (always true),
                    and the ability to update the isQuestion state with setIsQuestion */}
                    <TriviaCard index={questionNumber-1} isQuestion={isQuestion} setIsQuestion={setIsQuestion}/>
                </div>
            </div>
            
        </>
    )
}

export default App;
