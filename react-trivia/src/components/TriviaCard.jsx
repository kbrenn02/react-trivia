import './TriviaCard.css'
import Header from './Header';

function TriviaCard({index}) {
    return (
        <>
            <Header />
            <div className="div">
                <h2 className="title">Place question here and then I'm adding more text to see how the box fills up {index}</h2>
            </div>
        </>
    );
}

export default TriviaCard;
