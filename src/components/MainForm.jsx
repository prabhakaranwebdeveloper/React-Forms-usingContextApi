import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from './UserContext';

function MainForm() {
  const { setEmail } = useContext(UserContext);
  const navigate = useNavigate();
  const initialFormState = { email: '', password: '' };
  const [formData, setFormData] = useState(initialFormState);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail(formData.email); // Save email in context
    navigate('/signup'); // Navigate to Signup page
  };

  const handleReset = () => {
    setFormData(initialFormState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            minLength={10}
            maxLength={25}
            required
          />
        </div>
      </div>
      <p className="form-actions">
        <button type="button" className="button button-flat" onClick={handleReset}>
          Reset
        </button>
        <button className="button" type="submit">
          Login
        </button>
      </p>
    </form>
  );
}

export default MainForm;

