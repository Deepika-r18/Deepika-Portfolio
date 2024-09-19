import './App.css';
import Header from './componens/Header';
import Hero from './componens/Hero';
import Projects from './componens/Projects';
import Skills from './componens/skills';
import Education from './componens/Education';
import Contact from './componens/contact';


function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Projects/>
      <Skills/>
      <Education/>
      <Contact/>

    </div>
  );
}

export default App;
