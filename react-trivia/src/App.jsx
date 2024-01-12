import './App.css'
import TriviaCard from './components/TriviaCard'
import Score from './components/Score';
import Navigation from './components/Navigation';

function App() {
  
    // const currentTime = new Date().toDateString();

    // function handleClick(){
    //     console.log(currentTime);
    // }

    return (
        <>  
            <div className = "flex-container">
                <div className = "flex-child">
                    <Score />
                    <Navigation />
                </div>
                <div className = "flex-child">
                    <TriviaCard index={"wowza"}/>
                </div>
            </div>
            
        </>
    )
}

export default App;
