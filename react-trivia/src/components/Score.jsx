import { useState } from 'react';
import './Score.css'

function Score() {

    // initialize the score to 0 
    const [score, setScore] = useState(0)

    // function to create an alert when a user gets a question right
    function showSuccess() {
        var success = "Woohoo! You got a point";
        alert(success)
    }
    // function to create an alert when a user gets a question wrong
    function showFailure() {
        var failure = "Boo! You got it wrong";
        alert(failure)
    }
    // I wanted to make a separate div pop up briefly saying "Congrats" or "Boo" but I didn't spend enough time looking 
    // into how to place a div on the main body without moving things around


    return (
        <>
            <div className="score"> {/* the total score is updated in real time*/}
                <h1>Total Score: {score}</h1>
            </div>

            <div> { /*selecting the "wrong" button doesn't change the score and does show the fail message*/}
                <button className="wrong" onClick={() => { 
                    setScore(score)
                    showFailure()
                    }}>I missed it :(
                </button>
                { /* selecting the "right" button updates the score and shows the success message*/}
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
