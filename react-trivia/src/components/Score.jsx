import { useState } from 'react';
import './Score.css'

function Score() {

    // let score = 0
    const [score, setScore] = useState(0)

    function showSuccess() {
        var success = "Woohoo! You got a point";
        alert(success)
    }
    function showFailure() {
        var failure = "Boo! You got it wrong";
        alert(failure)
    }

    return (
        <>
            <div className="score">
                <h1>Total Score: {score}</h1>
            </div>

            <div>
                <button className="wrong" onClick={() => { 
                    setScore(score)
                    showFailure()
                    }}>I missed it :(
                </button>

                <button className="right" onClick={() => { 
                    setScore(score + 1)
                    showSuccess()
                    }}>I got it right!
                </button>
            </div>
        </>
    )

}

export default Score;
