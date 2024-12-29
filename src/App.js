import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './components/HomePage'; // Assuming you have a HomePage component
import ContactPage from './components/ContactPage'; // Assuming you have a ContactPage component
import './App.css'; // Import the global CSS file

function App() {
  return (
    <Router>
      <div>
        {/* Header with Quote */}
        <header className="header">
          <h1>"Code is like humor. When you have to explain it, it’s bad." – Cory House</h1>
        </header>

        {/* Navbar */}
        <nav className="navbar">
          <Link to="/" className="navbar-link">Home</Link>
          <Link to="/contact" className="navbar-link">Contact</Link>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
