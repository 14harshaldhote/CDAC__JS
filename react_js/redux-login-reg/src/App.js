import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './REDUXLOGIN/Login';
import Reg from './REDUXLOGIN/Reg';
import Home from './REDUXLOGIN/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registration" element={<Reg />} />
        <Route path="/main" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
// import React from 'react';
// import LoginApp from './Login/LoginApp'


// function App() {
//   return (
//     <div>
//       <LoginApp />
//     </div>
//   );
// }

// export default App;
