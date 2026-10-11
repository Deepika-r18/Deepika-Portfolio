
import './App.css';

import Header from './componens/Header';
import Hero from './componens/Hero';
import About from './componens/About';
import Skills from './componens/skills';
import Projects from './componens/Projects';
import Education from './componens/Education';
import Contact from './componens/contact';

function App() {
  return (
    <div className="App">
      <Header />

      <main>
  <Hero />
  <About />
  <Skills />
  <Projects />
  <Education />
  <Contact />
</main>
    </div>
  );
}

export default App;
