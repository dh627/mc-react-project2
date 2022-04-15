import Home from './Home';
import Navbar from './Navbar';
import User from './User';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/user" element={<User/>}/>
          </Routes>
        </div>
      </div>      
    </Router>
  );
}

export default App;
