import { useState, useRef, useEffect, useId } from 'react';
import './Header.css';
import vaporlogo from './assets/images/vaporlogo.png';
import Button from './Button';

function Header({ setPage }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [buttonText, setButtonText] = useState('Hi Gamer');
  const modalRef = useRef(null);
  const formId = useId();

  useEffect(() => {
    function handleResize() {
      setIsOpen(window.innerWidth > 800);
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  function changePage(path) {
    setPage(path);
    if (window.innerWidth <= 800) {
      setIsOpen(false);
    }
  }

  function handleLinkClick(e) {
    e.preventDefault();
    changePage(e.target.pathname);
  }

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  function toggleModal() {
    setIsModalOpen(!isModalOpen);
  }

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(event.target.value)) {
      setEmailError("Invalid email format");
    } else {
      setEmailError("");
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!emailError && name) {
      console.log('Submitted Name:', name);
      console.log('Submitted Email:', email);
      setButtonText(`Hi Gamer ${name}`);
      toggleModal();
    } else {
      console.error("Please fix the errors before submitting.");
    }
  }

  return (
    <header className="header">
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <img 
        src={vaporlogo} 
        alt="Vapor Station Logo" 
        className="header-logo" 
        onClick={() => changePage('/')}
      />
      <i className="gg-menu" onClick={toggleMenu} aria-label="Toggle Menu"></i>
      {isOpen && (
        <nav className="header-nav">
          <a className="header-link" href="/" onClick={handleLinkClick}>HOME</a>
          <a className="header-link" href="/game" onClick={handleLinkClick}>GAME</a>
          <a className="header-link" href="/about" onClick={handleLinkClick}>ABOUT US</a>
          <a className="header-link" href="/contact" onClick={handleLinkClick}>CONTACT</a>
        </nav>
      )}
      <Button className="modal-button" onClick={toggleModal} type='button' visual='button'>{buttonText}</Button>
      {isModalOpen && (
        <dialog className="modal" ref={modalRef} open>
          <p className='modal-text'>Hi, {name || "Gamer"}</p>
          <form className="modal-form" onSubmit={handleSubmit}>
            <label className="modal-form-label" htmlFor={`${formId}_name`}>Name:</label>
            <input className="modal-form-input" id={`${formId}_name`} type="text" value={name} onChange={handleNameChange} />

            <label className="modal-form-label" htmlFor={`${formId}_email`}>Email:</label>
            <input className="modal-form-input" id={`${formId}_email`} type="text" value={email} onChange={handleEmailChange} />
            {emailError && <div className="error">{emailError}</div>}

            <Button className="modal-submit" type="submit" visual='button'>Submit</Button>
            <Button className="modal-close" type="button" onClick={toggleModal} visual='button'>Close</Button>
          </form>
        </dialog>
      )}
    </header>
  );
}

export default Header;








