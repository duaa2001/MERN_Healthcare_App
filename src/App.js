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
       {/*Add nav bar here */}
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


//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
 