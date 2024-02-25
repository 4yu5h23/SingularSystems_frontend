import React from 'react'
import './Support.css'
import { useState } from 'react';

function Support() {

  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email_address: '',
    phone_number: '',
    subject: '',
    message: ''
  });

  const [feedback, setFeedback] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const submitForm = async (formData) => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/contact_us/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setFeedback("Form submitted successfully");
        setFormData({
          first_name: '',
          last_name: '',
          email_address: '',
          phone_number: '',
          subject: '',
          message: ''
        });
      } else {
        setFeedback("Please Fill the form correctly");
      }

    } catch (error) {
      console.error("There was an error submitting the form", error);
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const newFormData = {
      first_name: formData.first_name,
      last_name: formData.last_name,
      email_address: formData.email_address,
      phone_number: formData.phone_number,
      subject: formData.subject,
      message: formData.message
    };

    submitForm(newFormData);
  }

  return (
    <div className='container-fluid' id='supportId'>
      <div className="support-element" id='support-text'>
        <img src="/images/supportimg-1.png" alt="not found" />
        <img src="/images/supportimg-2.png" alt="not found" />
      </div>
      <div className="support-element" id='warranty'>
        <h1 className='warranty-head'>Warranty Terms*</h1>
        <p className='warranty-para'>All <span>SingularSystems</span> PCs come with a base warranty of one year that includes on-site repairs, software support over call and part replacements.</p>
        <p className='warranty-para'>You should not worry about contacting individual companies for the replacement part for the term of your warranty.</p>
        <p className='warranty-para'>The warranty does not cover damage caused by misuse, accidents, or natural disasters.
          If a certain part warranty does offer free replacement for any of the reasons that our warranty does not cover, we will replace the part free of cost, but service charges may apply.</p>
      </div>
      <div className="support-element container" id="contact">
        <h1>Contact Us</h1>

        <form onSubmit={handleSubmit}>
          <div class="row mb-4">
            <div class="col">
              <div class="form-outline">
                <label class="form-label" for="first_name">First name</label>
                <input
                  type="text"
                  id="first_name"
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleChange}
                  className="form-control" />
              </div>
            </div>
            <div class="col">
              <div class="form-outline">
                <label class="form-label" for="last_name">Last name</label>
                <input
                  type="text"
                  id="last_name"
                  name="last_name"
                  value={formData.last_name}
                  onChange={handleChange}
                  className="form-control"
                />

              </div>
            </div>
          </div>

          {/* <!-- Email input --> */}
          <div className="row mb-4">
            <div className="col">
              <div class="form-outline mb-4">
                <label class="form-label" for="email_address">Email address</label>
                <input
                  type="email"
                  id="email_address"
                  name="email_address"
                  value={formData.email_address}
                  onChange={handleChange}
                  className="form-control"
                />

              </div>
            </div>
            {/* Phone input  */}
            <div className="col">
              <div class="form-outline mb-4">
                <label class="form-label" for="phone_number">Phone Number</label>
                <input
                  type="number"
                  id="phone_number"
                  name="phone_number"
                  value={formData.phone_number}
                  onChange={handleChange}
                  className="form-control"
                />

              </div>
            </div>
          </div>

          {/* Subject input  */}
          <div class="form-outline mb-4">
            <label class="form-label" for="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="form-control"
            />

          </div>

          {/* Description input  */}
          <div class="form-outline mb-4">
            <label class="form-label" for="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="form-control"
              rows="4">
            </textarea>

          </div>

          {/* <!-- Submit button --> */}
          <button type="submit" class="btn btn-block mb-4" >Submit</button>
        </form>
        <div>{feedback}</div>
      </div>
    </div>
  )
}

export default Support
