import { useState } from 'react';
import './App.css'
import TriviaCard from './components/TriviaCard'
import Score from './components/Score';

function App() {
  
    // The navigation buttons work here to change the question number. The question number is then used in
    // the Trivia card as the index that will then pull in questions and answers
    const [questionNumber, setQuestionNumber] = useState(1)

    return (
        <>  
            <div className = "flex-container">
                <div className = "flex-child">
                    <Score />
                    <button className="previous" onClick={()=>{ setQuestionNumber(questionNumber-1)}}>Previous Question</button>
                    <button className="next" onClick={()=>{ setQuestionNumber(questionNumber+1)}}>Next Question</button>
                </div>
                <div className = "flex-child">
                    <TriviaCard index={questionNumber-1}/>
                </div>
            </div>
            
        </>
    )
}

export default App;
