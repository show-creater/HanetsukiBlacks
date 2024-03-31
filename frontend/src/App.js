import './App.css';
import TopImage from './photo/TopImage.png'
import BodyImage from './photo/BodyImage.png'

function App() {
  return (

    <div className="App">
      <header className="App-header">
        <div className="header-text-container">
          <h4 className="header-text">Hanetsuki Blacks</h4>
        </div>
        <div className="header-body">
          <h1 className="header-title">羽月BLACKS</h1>
          <h2 className="header-subtitle">- 台中バドミントンチーム -</h2>
          <img src={TopImage} alt="TopImage" className="Top-image"/>
        </div> 
      </header>
      <div className="body">
        <div className="body-top">
          <h1 style={{ fontSize: 70 }}>羽月BLAKCS</h1>
          <h2>初心者から上級者まで大歓迎です！！</h2>
          <h2>台中駐在日本人と台湾人でワイワイやっています～</h2>     
          <h2>興味のある方は是非～♪</h2>
          <img src={BodyImage} alt="BodyImage" className="Body-image"/> 
        </div>
      </div>
    </div>
  );
}

export default App;
