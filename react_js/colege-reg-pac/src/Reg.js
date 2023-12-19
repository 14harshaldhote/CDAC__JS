import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  

function Reg() {
  const navigate = useNavigate();
 

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    dob: '',
    gender: '',
    phoneNumber: '',
    address: '',
    city: '',
    state: '',
    tenthPercent: '',
    twelfthPercent: '',
    password: '',
    retypePassword: '',
  });

  const [passwordError, setPasswordError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheck = () => {
    console.log('Checking provided details:', formData);
  };

  const handleRegister = () => {
    if (formData.password !== formData.retypePassword) {
      setPasswordError('Passwords do not match');
      return;
    }

    console.log('Registration data:', formData);

    navigate('/login');
  };
  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light">
      <div className="container p-4 bg-white rounded shadow-lg">
        <h2 className="text-center text-primary mb-4">Placement Portal Registration</h2>
        <form>
          <div className="row g-3">
            <div className="col-md-6">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>

            <div className="col-md-6">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>

            {/* Add styling for other form elements similarly */}

            <div className="col-md-6">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>

            <div className="col-md-6">
              <label htmlFor="retypePassword" className="form-label">Retype Password</label>
              <input
                type="password"
                id="retypePassword"
                name="retypePassword"
                value={formData.retypePassword}
                onChange={handleChange}
                className="form-control"
                required
              />
              {passwordError && <p className="text-danger">{passwordError}</p>}
            </div>

            <div className="col-md-6">
              <label htmlFor="gender" className="form-label">Gender</label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="form-select"
                required
              >
                <option value="" disabled>Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="col-12 mt-4">
              <button
                type="button"
                onClick={handleCheck}
                className="btn btn-success"
              >
                Check
              </button>
            </div>
          </div>

          <div className="mt-4">
            <button
              type="button"
              onClick={handleRegister}
              className="btn btn-primary"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Reg;