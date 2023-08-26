import "./Myaccount.css";
import  { useState } from 'react';
function Myaccount() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
  
    const handleDiscard = () => {
      // Reset the form fields
      setName('');
      setEmail('');
      setPhone('');
    };
  
    const handleSave = () => {
      // Perform save operation (you can implement this as needed)
      console.log('Saved:', { name, email, phone });
    };
  
    return (
      <>
      <div className="App">
        <div className="account-form">
          <h2>My Account</h2>
          <p>View and edit you info</p><br></br><br></br>
          <div className="myacc-form-row">
            <label>First&nbsp;Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="myacc-form-row">
            <label>Last&nbsp;Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="myacc-form-row">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="myacc-form-row">
            <label>Phone:</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="form-buttons">
            <button onClick={handleDiscard}>Discard</button>
            <button onClick={handleSave}>Save</button>
          </div>
        </div>
      </div>
      </>
    );
  }

  export default Myaccount;