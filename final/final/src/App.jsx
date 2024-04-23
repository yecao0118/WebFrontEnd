import './App.css';
import { useState, useEffect } from 'react';
import Header from './Header';
import Home from './Home';
import About from './About';
import Game from './Game';
import Contact from './Contact';
import Footer from './Footer';
import CodeEcho from './CodeEcho';
import FindUs from './FindUs';

function App() {
  const [page, setPage] = useState(localStorage.getItem('currentPage') || '/');

  useEffect(() => {
    localStorage.setItem('currentPage', page);
  }, [page]);

  return (
    <>
      <Header setPage={setPage} />
      {page === '/' && <Home />}
      {page === '/about' && <About />}
      {page === '/game' && <Game setPage={setPage} /> }
      {page === '/contact' && <Contact />}
      {page === '/code-echo' && <CodeEcho />}
      {page === '/find-us' && <FindUs />}
      <Footer />
    </>
  );
}

export default App
