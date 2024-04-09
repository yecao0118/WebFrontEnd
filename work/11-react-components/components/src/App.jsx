import './App.css';
import { useState } from 'react';
import Header from './Header';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  const [page, setPage] = useState('/');

  return (
    <>
     <Header className="header" setPage={setPage} />
     
     {page === '/' && <Home />}
     {page === '/about' && <About setPage={setPage} />}
     {page === '/contact' && <Contact />}
     <Footer />
    </>
  )
}

export default App
