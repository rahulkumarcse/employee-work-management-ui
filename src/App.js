import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './Components/Home';
import Navbar from './Components/Navbar';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
