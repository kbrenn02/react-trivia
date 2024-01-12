import './App.css'
import TriviaCard from './components/TriviaCard'
import Score from './components/Score';

function App() {
  
    const currentTime = new Date().toDateString();

    function handleClick(){
        console.log(currentTime);
    }

    return (
        <>  
            <TriviaCard />
            <Score />
        </>
    )
}

export default App;
