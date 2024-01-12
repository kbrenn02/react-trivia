import './TriviaCard.css'
import Header from './Header';
import { useState } from 'react';

function TriviaCard({index}) {
    
    const questions = [
        "What year was the movie Avatar released?                                 ",
        "Who directed the movie Avatar?                                           ",
        "What is the name of the fictional planet in Avatar?                      ",
        "How many sequels to Avatar were announced by James Cameron?              ",
        "What is the name of the sacred tree in the movie Avatar?                 ",
        "How long is the director's cut of Avatar?                                ",
        "What is the name of the mineral being mined on Pandora?                  ",
        "What is the name of the humanoid species indigenous to Pandora?          ",
        "How much money did Avatar gross worldwide at the box office?             ",
        "Which actress portrays the character of Neytiri in Avatar?               ",
        "In what country was most of Avatar's live-action footage shot?           ",
        "What is the estimated budget of Avatar?                                  ",
        "What film surpassed Avatar as the highest-grossing movie?                ",
        "Who does Jake Sully replace as an avatar driver on Pandora?              ",
        "How does Jake Sully communicate with his avatar body?                    ",
        "What does the Na'vi refer to the humans as in the movie?                 ",
        "How many fingers do the Na'vi have on each hand?                         ",
        "What are the floating mountains in Avatar?                               ",
        "How many Academy Awards did Avatar win?                                  ",
        "What is the spiritual network that connects all living things on Pandora?"
    ]
    const answers = [
        "2009",
        "James Cameron",
        "Pandora",
        "Four (4)",
        "The Tree of Souls",
        "Approximately 2 hours and 58 minutes",
        "Unobtainium",
        "Na'vi",
        "Over $2.7 billion",
        "Zoe Saldana",
        "New Zealand",
        "Around $237 million",
        "Avengers: Endgame",
        "His twin brother, Tom Sully",
        "Through a neural link",
        "Sky People",
        "Four (4)",
        "Hallelujah Mountains",
        "Three (3)",
        "Eywa",
    ]

    const [isQuestion, setIsQuestion] = useState(true);

    function toggle() {
        setIsQuestion(!isQuestion);
    }
    
    return (
        <>
            <Header index={index+1}/>
            <div className="div">
                <h2 className="title" onClick={() => toggle()}>
                    {isQuestion ? questions[index] : answers[index]}
                </h2>
            </div>
        </>
    );
}

export default TriviaCard;


