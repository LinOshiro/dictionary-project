import logo from './logo.png';
import './App.css';
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="beach" />
        </main>
        <footer className="App-footer">
          <small>
            Open-sourced on{" "}
            <a
              href="https://github.com/LinOshiro/dictionary-project"
              target="_blank"
              rel="nooppener noreferrer"
            >
              GitHub{" "}
            </a>
            and{" "}
            <small>
              <a
                href="https://celebrated-lolly-55ad8d.netlify.app/"
                target="_blank"
                rel="nooppener noreferrer"
              >
                hosted on Netlify
              </a>
            </small>{" "}
            by Lindsay Oshiro
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
