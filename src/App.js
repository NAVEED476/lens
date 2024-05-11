import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import CoverPage from './components/CoverPage';
import About from './components/About';
import Services from './components/Services';
import AiBar from './components/AiBar';
import Vision from './components/Vision';
import WhyToChoose from './components/WhyToChoose';
import Solutions from './components/Solutions';
import GetKnow from './components/GetToKnow';
import NewFigures from './components/NewFigures';
import Slider from './components/Slider';
import GetInTouch from './components/GetInTouch';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <CoverPage/>
      <About/>
      <Services/>
      <AiBar/>
      <WhyToChoose/>
      <Solutions/>
      <Vision/>
      <Slider/>
      <NewFigures/>
      <GetKnow/>
      <GetInTouch/>
    </div>
  );
}

export default App;
