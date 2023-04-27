import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Testimonials from './Components/Testimonials';
import Work from './Components/Work';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/testimonial' element={<Testimonials/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
