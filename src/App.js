import logo from './logo.png';
import './App.css';
import NavBar from './components/NavBar'

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <p>
          Diego's PC Component Store
        </p>
       
      </header>
    </div>
  );
}

export default App;
