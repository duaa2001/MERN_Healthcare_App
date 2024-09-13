import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import FAQ from './components/FAQ';
import Resources from './components/Resources';
import Chatbot from './components/Chatbot';
import Login from './components/Login';
import Threads from './components/Threads';
import Assessment from './components/Assessments';
import Groups from './components/Groups';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status
  const [showLoginForm, setShowLoginForm] = useState(false); // Toggle to show login form
  const [username, setUsername] = useState('');

  // Handle login form submission
  const handleLoginSubmit = (username) => {
    setIsLoggedIn(true);
    setUsername(username);
    setShowLoginForm(false); // Hide login form after login
  };

  // Handle logout
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
  };

  return (
    <Router>
      <div className="App">
        {/* Navigation Bar */}
        <nav className="Nav-bar">
          <Link to="/" className="nav-link">HOME</Link>
          <Link to="/resources" className="nav-link">Resources</Link>
          <Link to="/assessments" className="nav-link">Assessments</Link>
          <Link to="/threads" className="nav-link">Threads</Link>
          <Link to="/groups" className="nav-link">Groups</Link>
          <Link to="/faq" className="nav-link">FAQ</Link>
        </nav>

        {/* Header Section */}
        <header className="App-header">
          <h1>
            <Link to="/" className="home-link">FEMCARE</Link>
          </h1>
          <h4 className="subtitle">....We all care</h4>
        </header>

        {/* Main Content */}
        <main className="Main-content">
          <Routes>
            {/* Homepage Route */}
            <Route
              path="/"
              element={
                <div>
                  {/* If user is not logged in */}
                  {!isLoggedIn ? (
                    <div>
                      {/* Show Join button if login form is not visible */}
                      {!showLoginForm && (
                        <button className="join-button" onClick={() => setShowLoginForm(true)}>
                          Join
                        </button>
                      )}

                      {/* Show Login form when Join button is clicked */}
                      {showLoginForm && (
                        <Login handleLoginSubmit={handleLoginSubmit} />
                      )}
                    </div>
                  ) : (
                    <div className="welcome-section">
                      <p>Welcome, {username}!</p>
                      <button className="logout-button" onClick={handleLogout}>Logout</button>
                    </div>
                  )}

                  {/* Other homepage content */}
                  <div className="image-container">
                    <img
                      src="/American Medical Association image.jpeg"
                      alt="American Medical Association"
                    />
                  </div>

                  <section className="row">
                    <a href="/assessments" className="latest">
                      <div>
                        <h5>Latest:</h5>
                        <p>Take our free breast cancer self-assessment NOW!</p>
                      </div>
                    </a>

                    <a href="/groups" className="new-moms-quicklink">
                      <div>
                        <h5>New Mom:</h5>
                        <p>Join our Maternity Support Group</p>
                      </div>
                    </a>

                    <a href="/chat" className="chat-bot">
                      <div>
                        <h5>Chat:</h5>
                        <p>Chat with us!</p>
                      </div>
                    </a>
                  </section>
                </div>
              }
            />
            <Route path="/resources" element={<Resources />} />
            <Route path="/assessments" element={<Assessment />} />
            <Route path="/threads" element={<Threads />} />
            <Route path="/groups" element={<Groups />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/chat" element={<Chatbot />} />
          </Routes>
        </main>

        {/* Footer Section */}
        <footer className="App-footer">
          <p>&copy; 2024 FEMCARE. All rights reserved.</p>
          <ul className="footer-links">
            <li><a href="/terms">Terms of Service</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </footer>
      </div>
    </Router>
  );
}

export default App;




