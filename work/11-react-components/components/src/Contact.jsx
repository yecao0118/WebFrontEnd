import React from 'react';
import './Contact.css';
import image1 from './assets/images/1.jpg';
import { useRef, useId} from 'react';
import Button from './Button';

function Contact() {
    const dialogRef = useRef();
    const formId = useId();

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        console.log('Form submitted:', formData.get('email'));
        dialogRef.current.close();
    }

  return (
    <div className="contact contact-container">
      <div className="panel">
        <div className="panel-text">
          <h2 className='contact-title'>Contact</h2>
          <p className='contact-text'>If you have any questions, please don't hesitate to send me a message!</p>
        </div>
        <div className="panel-image">
          <img src={image1} alt="Customer Service"/>
        </div>
      </div>
      <div className="panel">
        <div className="panel-text">
          <h2 className='contact-title'>Personal Info</h2>
          <p className='contact-text'>If you have any questions, please don't hesitate to send me a message!</p>
        </div>
        <div className="panel-image">
          <img src={image1} alt="Customer Service"/>
        </div>
      </div>
      
      <Button className="modal-button" onClick={() => dialogRef.current.showModal()} visual="button">Leave Your Email</Button>
      <dialog className="dialog" ref={dialogRef} onClose={() => console.log('Modal closed')}>
        <form className="form" onSubmit={handleSubmit}>
          <label htmlFor={`${formId}-email`}>Email:</label>
          <input id={`${formId}-email`} name="email" type="email" required />
          <Button className="submit-button" type="submit" visual="link">Submit</Button>
          <Button className="close-button" onClick={() => dialogRef.current.close()} visual="button">Close Modal</Button>
        </form>
      </dialog>
    </div>
  );
}

export default Contact;
