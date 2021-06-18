import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
    <div >
      <NavBar />
      <ItemDetailContainer className="itemDetailContainer" />
      <ItemListContainer greeting ="Welcome to Diego's Pc Parts"/>
      
      
    </div>
  );
}

export default App;
