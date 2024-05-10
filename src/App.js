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
      
    </div>
  );
}

export default App;
