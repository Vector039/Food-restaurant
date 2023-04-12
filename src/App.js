import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Testimonials from './Components/Testimonials';
import Work from './Components/Work';

function App() {
  return (
    <div className="App">
      <Home/>
      <About/>
      <Work/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
