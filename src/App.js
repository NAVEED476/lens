import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import CoverPage from './components/CoverPage';
import About from './components/About';
import Services from './components/Services';
import AiBar from './components/AiBar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <CoverPage/>
      <About/>
      <Services/>
      <AiBar/>
    </div>
  );
}

export default App;
