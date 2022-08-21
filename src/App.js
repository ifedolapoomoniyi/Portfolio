import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import GetInTouch from './components/GetInTouch';
import LandingPage from './components/LandingPage';
import Navbar from './components/Navbar/Navbar';
import Skills from './components/Skills';

function App() {
  return(
    <div className='homepage'>
      <Navbar/>
      <LandingPage/>
      <About/>
      <Skills/>
      <GetInTouch/>
      <Footer/>
    </div>
  )
}

export default App