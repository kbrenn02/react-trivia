import './App.css'
import TriviaCard from './components/TriviaCard'
import Header from './components/Header'
import Score from './components/Score';

function App() {
  
    const currentTime = new Date().toDateString();

    function handleClick(){
        console.log(currentTime);
    }

    return (
        <>  
            <Header />
            <TriviaCard />
            <Score />
        </>
    )
}

export default App;
