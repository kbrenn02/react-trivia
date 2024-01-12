import { useState } from 'react';
import './Score.css'

function Score() {

    // let score = 0
    const [score, setScore] = useState(0)

    return (
        <>
            <h3>Total Score: {score}</h3>
            <button onClick={()=>{ setScore(score + 1)}}>I got it right!</button>
            <button onClick={()=>{ setScore(score)}}>I missed it :(</button>
            <button onClick={()=>{ }}>Next Question</button>
            <button onClick={()=>{ }}>Previous Question</button>
        </>
    )

}

export default Score;
