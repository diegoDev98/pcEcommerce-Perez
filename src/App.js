import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';


function App() {
  return (
    <div >
      <Router>
        <NavBar />
        <Switch>
          <Route path="/item/:id">
            <ItemDetailContainer className="itemDetailContainer" />
          </Route>
          <Route exact path={['/','/categories/:categoryId']}>
            <ItemListContainer greeting ="Bienvenido a DiegoTech"/>
          </Route>
        </Switch>
      </Router>
      
      
    </div>
  );
}

export default App;
