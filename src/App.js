import logo from './Images/logo.svg';
import './App.css';
import Home from "./Components/Home";
import About from './Components/About';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';
import Project from './Components/Project';
import Education from './Components/Education';
import { BrowserRouter as Router } from "react-router-dom"
function App() {
  return (
    <div className="App">
      <Router>
         <Navbar />
         <Home />
         <About/>
         <Project/>
         <Education/>
         <Contact />
      </Router>
    </div>
  );
}

export default App;