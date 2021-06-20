import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter as Router,Route} from 'react-router-dom';


function App() {
  return (
    <div >
      <Router>
        <NavBar />
        <Route path="/item/:id">
          <ItemDetailContainer className="itemDetailContainer" />
        </Route>
        <Route exact path={['/','/category/:id']}>
          <ItemListContainer greeting ="Welcome to Diego's Pc Parts"/>
        </Route>
      </Router>
      
      
    </div>
  );
}

export default App;
