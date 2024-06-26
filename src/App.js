import './App.css';
import '/Users/dakshgupta/Desktop/cikm-2024/src/components/Navbar.js';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Accepted from './components/Accepted';
import Call from './components/Call';
import Organizers from './components/Organizers';
function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/accepted' element={<Accepted/>}/>
        <Route path='/call' element={<Call/>}/>
        <Route path='/organizers' element={<Organizers/>}/>
      </Routes>
    </Router>
      
    </>
  );
}

export default App;
