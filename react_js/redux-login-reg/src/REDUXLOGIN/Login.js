import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setError, clearError, selectErrorMessage } from '../slices/errorSlice';
import { loginUser } from '../slices/authSlice';
import 'bootstrap/dist/css/bootstrap.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const errorMessage = useSelector(selectErrorMessage);

  const handleLogin = () => {
    console.log('Login with:', { email, password });

    const isAuthenticated = true;

    if (isAuthenticated) {
      dispatch(loginUser({ id: 1, email: '' }));
      navigate('/main');
    } else {
      dispatch(setError('Invalid credentials'));
    }
  };

  const redirectToRegistration = () => {
    navigate('/registration');
  };

  useEffect(() => {
    dispatch(clearError());
  }, [dispatch]);

  return (
    <div className="min-h-screen d-flex align-items-center justify-content-center">
      <div className="container p-4 m-5 bg-danger rounded-md shadow-md">
        <h2 className="text-3xl font-semibold mb-4 text-center text-gray-800">Login</h2>
        {errorMessage && <p className="text-danger">{errorMessage}</p>}
        <form className="d-flex flex-column align-items-center">
          <div className="mt-4 w-75">
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              placeholder="Email"
              required
            />
          </div>

          <div className="mt-4 w-75">
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              placeholder="Password"
              required
            />
          </div>

          <div className="mt-4 w-75">
            <button
              type="button"
              onClick={handleLogin}
              className="btn btn-primary btn-block"
            >
              Login
            </button>
          </div>

          <div className="mt-4 text-center">
            <p className="text-gray-700">Don't have an account?</p>
            <button
              onClick={redirectToRegistration}
              className="text-blue-500 hover:underline cursor-pointer"
            >
              Register here
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
