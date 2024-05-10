import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import CoverPage from './components/CoverPage';
import About from './components/About';
import Services from './components/Services';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <CoverPage/>
      <About/>
      <Services/>
    </div>
  );
}

export default App;
