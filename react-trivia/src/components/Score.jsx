import { useState } from 'react';
import './Score.css'

function Score() {

    // let score = 0
    const [score, setScore] = useState(0)

    return (
        <>
            <div className="score">
                <h1>Total Score: {score}</h1>
            </div>

            <div>
                <button className="wrong" onClick={()=>{ setScore(score)}}>I missed it :(</button>
                <button className="right" onClick={()=>{ setScore(score + 1)}}>I got it right!</button>
            </div>
        </>
    )

}

export default Score;
