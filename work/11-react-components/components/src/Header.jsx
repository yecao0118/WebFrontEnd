import './Header.css';

function Header({ setPage }) {
    function changePage(e) {
        e.preventDefault();
        setPage(e.target.pathname); 
    }

  return (
    <header className="header">
        <h1 className='header-title'>Welcome To Dogs World</h1>
        <nav className="header-nav">
            <a className="header-link" href="/" onClick={changePage}>Home</a>
            <a className="header-link" href="/about" onClick={changePage}>About</a>
            <a className="header-link" href="/contact" onClick={changePage}>Contact</a>
        </nav>
    </header>
  );
}

export default Header;