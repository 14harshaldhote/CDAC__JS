
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setError, clearError } from '../slices/errorSlice';
import { logoutUser, loginUser } from '../slices/authSlice';


import { selectErrorMessage } from '../slices/errorSlice';

function Registration() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [retypePassword, setRetypePassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const errorMessage = useSelector(selectErrorMessage);

  const handleRegister = () => {
    if (password !== retypePassword) {
      dispatch(setError('Passwords do not match'));
      return;
    }

 
    const userData = { id: 1, name, email };
    dispatch(clearError());
    dispatch(logoutUser()); 
    dispatch(loginUser(userData)); 
    navigate('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 shadow-md rounded-md">
        <h2 className="text-2xl font-semibold mb-4 text-center">Registration</h2>
        {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            placeholder="Retype Password"
            value={retypePassword}
            onChange={(e) => setRetypePassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-md"
          />
        </div>
        <button onClick={handleRegister} className="w-full bg-blue-500 text-white py-2 rounded-md">
          Register
        </button>
      </div>
    </div>
  );
}

export default Registration;
