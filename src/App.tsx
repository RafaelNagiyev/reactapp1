
import './App.scss';
import { Footer } from './pages/Footer/Footer';
import { Header } from './pages/Header/Header';
import { HeroBlock } from './pages/HomePage/Hero/HeroBlock';

function App() {
  return (
    <div className="App">
        <Header />
      <main>
        <HeroBlock />
      </main>
        <Footer />
    </div>
  );
}

export default App;
