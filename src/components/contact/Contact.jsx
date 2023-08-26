import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-details">
        <p className="contact-title">Contact Us</p>
        <p className="contact-address">
          500 Terry Francois Street, 6th Floor. San Francisco, CA 94158
        </p>
        <p className="contact-email">shishankrawxxxx@gmail.com</p>
        <p className="contact-email">dakshgoelsml@gmail.com</p>
        <p className="contact-phone">XXX-XXX-XXXX</p>
      </div>
      <div className="contact-form">
        <form className="my-contact-form">
          <div className="form-row">
            <div className="form-half-wd">
              <label className="required" htmlFor="name">Name</label> <br />
              <input type="text" placeholder="Enter your name" />
              <div className="underline"></div>
            </div>
            <div className="form-half-wd">
              <label className="required" htmlFor="name">Email</label> <br />
              <input type="text" placeholder="Enter your email" />
              <div className="underline"></div>
            </div>
          </div>
          <div className="form-row">
            <div className="form-half-wd">
              <label htmlFor="name">Phone</label> <br />
              <input type="text" placeholder="Enter your phone number" />
            </div>
            <div className="form-half-wd">
              <label htmlFor="name">Address</label> <br />
              <input type="text" placeholder="Enter your address" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-full-wd">
              <label htmlFor="name">Subject</label> <br />
              <input type="text" placeholder="Type the subject" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-full-wd">
              <label htmlFor="name">Message</label> <br />
              <input type="text" placeholder="Type your message here..." id="message-field" />
            </div>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
