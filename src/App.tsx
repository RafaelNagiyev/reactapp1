
import './App.scss';
import { Footer } from './pages/Footer/Footer';
import { Header } from './pages/Header/Header';
import { AboutMe } from './pages/HomePage/AboutMe/AboutMe';
import { HeroBlock } from './pages/HomePage/Hero/HeroBlock';
import { Skills } from './pages/HomePage/Skills/Skills';

function App() {
  return (
    <div className="App">
        <Header />
      <main>
        <HeroBlock />
        <AboutMe />
        <Skills />
      </main>
        <Footer />
    </div>
  );
}

export default App;
