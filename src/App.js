//import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>FEMCARE</h1> {/* Title */}
        <h4>....We all care</h4> {/* Subtitle */}
      </header>

      <nav className="Nav-bar">
          <a href="#login">Login</a>
          <a href="#resources">Resources</a>
          <a href="#assessments">Assessments</a>
          <a href="#threads">Threads</a>
          <a href="#groups">Groups</a>
          <a href="#faq">FAQ</a>
      </nav>

      <main className = "Main-content">
        <div className="image-container">
          <img src="/American Medical Association image.jpeg" alt="taken from American Medical Association" />
        </div>

        <section className="row">
          <a href="/latest" className="latest">
            <div>
              <h5>Latest:</h5>
              <p>Take our free breast cancer self-assessment NOW!</p>
            </div>
          </a>

          <a href="/new-moms" className="new-moms-quicklink">
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
      </main>
    </div>
  );
}

export default App;


 