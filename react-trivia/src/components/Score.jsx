import { useState } from 'react';
import './Score.css'

function Score() {

    // let score = 0
    const [score, setScore] = useState(0)

    return (
        <>
            <div className="score">
                <h3>Total Score: {score}</h3>
            </div>

            <div>
                <button className="wrong" onClick={()=>{ setScore(score)}}>I missed it :(</button>
                <button className="right" onClick={()=>{ setScore(score + 1)}}>I got it right!</button>
            </div>
            
            <div>
                <button className="previous" onClick={()=>{ }}>Previous Question</button>
                <button className="next" onClick={()=>{ }}>Next Question</button>
            </div>
            
        </>
    )

}

export default Score;
