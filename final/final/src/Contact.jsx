import { useState, useId } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    gender: '',
    otherGender: '',
    shippingAddress: '',
    billingAddress: '',
    sameAsShipping: false,
    message: ''
  });

  const [emailError, setEmailError] = useState("");
  const formId = useId();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        setEmailError("Invalid email format");
      } else {
        setEmailError(""); 
      }
    }

    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!emailError && formData.name && formData.email) {
      console.log('Form Submitted:', {
        Name: formData.name,
        Email: formData.email,
        Phone: formData.phone,
        Gender: formData.gender,
        OtherGender: formData.otherGender,
        ShippingAddress: formData.shippingAddress,
        BillingAddress: formData.billingAddress,
        SameAsShipping: formData.sameAsShipping,
        Message: formData.message
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        gender: '',
        otherGender: '',
        shippingAddress: '',
        billingAddress: '',
        sameAsShipping: false,
        message: ''
      });
    } else {
      console.error("Please correct the errors before submitting:");
      if (emailError) {
        console.error("Email Error: " + emailError);
      }
      if (!formData.name) {
        console.error("Name is required.");
      }
      if (!formData.email) {
        console.error("Email is required.");
      }
    }
  };

  return (
    <div id='main-content'>
      <div className="contact">
        <h1 className="contact-title">CONTACT</h1>
        <p className="contact-text">Please contact us for more information about the company, the team or our games.<br />Leave your address for a trial version of the new game. </p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <p className="required">(* is required)</p>
          <div className="form-group">
            <label htmlFor={`${formId}-name`}>Name: *</label>
            <input className='input'
              type="text"
              id={`${formId}-name`}
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              aria-label="Name required"
            />
          </div>
          <div className="form-group">
            <label htmlFor={`${formId}-email`}>Email: *</label>
            <input className='input'
              type="text"
              id={`${formId}-email`}
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              aria-label="Email required"
            />
            {emailError && <div className="error">{emailError}</div>}
          </div>
          <div className="form-group">
            <label htmlFor={`${formId}-phone`}>Phone:</label>
            <input className='input'
              type="text"
              id={`${formId}-phone`}
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              aria-label="Phone optional"
            />
          </div>
          <div className="form-group">
            <label htmlFor={`${formId}-gender`}>Gender:</label>
            <select className='select'
              id={`${formId}-gender`}
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              aria-label="Select gender"
            >
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            {formData.gender === 'other' && (
              <input className='input'
                type="text"
                id={`${formId}-otherGender`}
                name="otherGender"
                value={formData.otherGender}
                onChange={handleChange}
                placeholder="Please specify *"
                required
                aria-label="Specify other gender"
              />
            )}
          </div>
          <div className="form-group">
            <label htmlFor={`${formId}-shippingAddress`}>Shipping Address:</label>
            <input className='input'
              type="text"
              id={`${formId}-shippingAddress`}
              name="shippingAddress"
              value={formData.shippingAddress}
              onChange={handleChange}
              aria-label="Shipping address optional"
            />
          </div>
          <div className="form-group">
            <label htmlFor={`${formId}-sameAsShipping`}>
              <input
                className="input-checkbox"
                type="checkbox"
                id={`${formId}-sameAsShipping`}
                name="sameAsShipping"
                checked={formData.sameAsShipping}
                onChange={handleChange}
                aria-label="Billing address same as shipping address"
              />
              Billing address same as shipping
            </label>
          </div>

          <div className="form-group">
            <label htmlFor={`${formId}-billingAddress`}>Billing Address:</label>
            <input className='input'
              type="text"
              id={`${formId}-billingAddress`}
              name="billingAddress"
              value={formData.sameAsShipping ? formData.shippingAddress : formData.billingAddress}
              onChange={handleChange}
              readOnly={formData.sameAsShipping}
              aria-label="Billing address"
            />
          </div>
          <div className="form-group">
            <label htmlFor={`${formId}-message`}>Message:</label>
            <textarea className='textarea'
              id={`${formId}-message`}
              name="message"
              value={formData.message}
              onChange={handleChange}
              aria-label="Message optional"
            />
          </div>
          <button type="submit" className="submit-button" aria-label="Submit form">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;

