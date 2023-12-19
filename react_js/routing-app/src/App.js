
import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Menu from './Menu';
import Home from './pages/Home';
import About from './pages/About';
import Content from './pages/Content';
import Services from './pages/Services';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu/>}>
            <Route index element={<Home/>} />
            <Route path="about" element={<About/>} />
            <Route path="content" element={<Content/>} />
            <Route path="services" element={<Services/>} />

            
          
          </Route> 
              

        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
