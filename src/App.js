import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import FAQ from './components/FAQ';
import Resources from './components/Resources';
import Chatbot from './components/Chatbot';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>
            <Link to="/" className="home-link">FEMCARE</Link>
          </h1> {/* Title */}
          <h4>....We all care</h4> {/* Subtitle */}
        </header>
{/* 
        // Navigation bar component with links to different sections of the application */}
        <nav className="Nav-bar">
          <Link to="/login">Login</Link>
          <Link to="/resources">Resources</Link>
          <Link to="/assessments">Assessments</Link>
          <Link to="/threads">Threads</Link>
          <Link to="/groups">Groups</Link>
          <Link to="/faq">FAQ</Link>
        </nav>

      {/* Main content area containing application routes */}
        <main className="Main-content">
          <Routes>
            {/* Route for the login page */}
            <Route path="/login" element={<div>Login Component</div>} />

            {/* Route for the Resources page */}
            <Route path="/resources" element={<Resources />} />

            {/* Route for the Assessment page */}
            <Route path="/assessments" element={<div>Assessments Component</div>} />

            {/* Route for the Thread page */}
            <Route path="/threads" element={<div>Threads Component</div>} />

            {/* Route for the Group page */}
            <Route path="/groups" element={<div>Groups Component</div>} />

            {/* Route for the Faq page */}
            <Route path="/faq" element={<FAQ />} />

            {/* Route for the ChatBot page */}
            <Route path="/chat" element={<Chatbot />} /> {/* for chatbot */}
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

                {/* Link to the latest page with a breast cancer self-assessment */}
                  <section className="row">
                    <a href="/latest" className="latest">
                      <div>
                        <h5>Latest:</h5>
                        <p>Take our free breast cancer self-assessment NOW!</p>
                      </div>
                    </a>

                  {/* Link to the New Moms page with a Maternity Support Group */}
                    <a href="/new-moms" className="new-moms-quicklink">
                      <div>
                        <h5>New Mom:</h5>
                        <p>Join our Maternity Support Group</p>
                      </div>
                    </a>

                  {/* Link to the Chat Page for Chatting with a bot */}
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
