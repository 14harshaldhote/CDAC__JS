import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
 

  const handleLogin = () => {
    console.log('Login with:', { email, password });
    navigate('/main');
  };

  const redirectToRegistration = () => {
    navigate('/registration'); 
  };


  return (
    <div className="min-h-screen d-flex align-items-center justify-content-center">
      <div className="container p-4 m-5 bg-danger rounded-md shadow-md">
        <h2 className="text-3xl font-semibold mb-4 text-center text-gray-800">Login</h2>
        <form className="d-flex flex-column align-items-center">
          <div className="mb-4 w-75">
            <label className="block text-black text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              required
            />
          </div>

          <div className="mb-4 w-75">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
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
            <button onClick={redirectToRegistration} className="text-blue-500 hover:underline cursor-pointer">
              Register here
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;