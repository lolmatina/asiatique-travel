import './App.css';
import Home from './pages/index';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './widgets/navbar';
import Footer from './widgets/footer';
function App() {
  return (
    
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
