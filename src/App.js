// src/App.js
import React from 'react';
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
  return (
    <Router>
      <div className="App">
      {/* Move the nav element above the header */}
      <nav className="Nav-bar">
        <Link to="/login">Login</Link>
        <Link to="/resources">Resources</Link>
        <Link to="/assessments">Assessments</Link>
        <Link to="/threads">Threads</Link>
        <Link to="/groups">Groups</Link>
        <Link to="/faq">FAQ</Link>
      </nav>

      <header className="App-header">
        <h1>
          <Link to="/" className="home-link">FEMCARE</Link>
        </h1> {/* Title */}
        <h4>....We all care</h4> {/* Subtitle */}
      </header>
    

        <main className="Main-content">
          <Routes>
            <Route path="/login/*" element={<Login />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/assessments" element={<Assessment />} />
            <Route path="/threads" element={<Threads />} />
            <Route path="/groups" element={<Groups />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/chat" element={<Chatbot />} />
            <Route
              path="/"
              element={
                <div>
                  <div className="image-container">
                    <img
                      src="/American Medical Association image.jpeg"
                      alt="taken from American Medical Association"
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
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
