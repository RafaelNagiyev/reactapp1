
import './App.scss';
import { Footer } from './Footer/Footer';
import { Header } from './pages/Header/Header';
import { HomePage } from './pages/HomePage/HomePage';

function App() {
  return (
    <div className="App">
        <Header />
      <main>
        <HomePage />
      </main>
        <Footer />
    </div>
  );
}

export default App;
