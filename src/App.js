import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import { CartProvider } from './components/CartContext';

function App() {
  return (
    <div >
      <Router>
        <NavBar />
        <CartProvider>
        <Route path="/item/:id">
          <ItemDetailContainer className="itemDetailContainer" />
        </Route>
        <Route exact path={['/','/category/:category']}>
          <ItemListContainer greeting ="Bienvenido a DiegoTech"/>
        </Route>
        </CartProvider>
      </Router>
      
      
    </div>
  );
}

export default App;
