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
import Footer from './components/Footer';
import Blogs from './components/Blogs';
import "../src/components/media.css";

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
      <Blogs/>
      <Slider/>
      <NewFigures/>
      <GetKnow/>
      <GetInTouch/>
      <Footer/>
    </div>
  );
}

export default App;
