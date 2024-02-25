import React from 'react'
import './Support.css'

function Support() {

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
              console.log("Form submitted successfully");
              // Optionally reset the form or show a success message to the user
          } else {
              console.error("Failed to submit the form");
              // Handle errors, maybe show an error message to the user
          }
      } catch (error) {
          console.error("There was an error submitting the form", error);
      }
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      const formData = {
          first_name: event.target.first_name.value,
          last_name: event.target.last_name.value,
          email_address: event.target.email_address.value,
          phone_number: event.target.phone_number.value, 
          subject: event.target.subject.value,
          message: event.target.message.value
      };
  
      submitForm(formData);
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
        <div classNameName="support-element container-fluid" id="contact">
          <h1>Contact Us</h1>
          
          <form onSubmit={handleSubmit}>
            <div class="row mb-4">
              <div class="col">
                <div class="form-outline">
                  <label class="form-label" for="first_name">First name</label>
                  <input type="text" id="first_name" class="form-control" />
                </div>
              </div>
              <div class="col">
                <div class="form-outline">
                  <label class="form-label" for="last_name">Last name</label>
                  <input type="text" id="last_name" class="form-control" />
                </div>
              </div>
            </div>
  
            {/* <!-- Email input --> */}
            <div className="row mb-4">
              <div className="col">
                <div class="form-outline mb-4">
                  <label class="form-label" for="email_address">Email address</label>
                  <input type="email" id="email_address" class="form-control" />
                </div>
              </div>
              {/* Phone input  */}
              <div className="col">
                <div class="form-outline mb-4">
                  <label class="form-label" for="phone_number">Phone Number</label>
                  <input type="number" id="phone_number" class="form-control" />
                </div>
              </div>
            </div>
  
            {/* Subject input  */}
            <div class="form-outline mb-4">
              <label class="form-label" for="subject">Subject</label>
              <input type="text" id="subject" class="form-control" />
            </div>
  
            {/* Description input  */}
            <div class="form-outline mb-4">
              <label class="form-label" for="message">Message</label>
              <textarea class="form-control" id="message" rows="4"></textarea>
            </div>
  
            {/* <!-- Submit button --> */}
            <button type="submit" class="btn btn-block mb-4" >Submit</button>
          </form>
        </div>
      </div>
    )
}
