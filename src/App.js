import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import { CartProvider } from './CartContext.js';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';

function App() {
  
  return (
    <div >
      <Router>
      <CartProvider>
        <NavBar />
  
        <Route path="/cart">
          <Cart/>
        </Route>
        <Route path="/item/:id">
          <ItemDetailContainer className="itemDetailContainer" />
        </Route>
        <Route exact path={['/','/category/:category']}>
          <ItemListContainer greeting ="Bienvenido a DiegoTech"/>
        </Route>
        <Route path ="/checkout">
          <Checkout/>
        </Route>
        
        </CartProvider>
      </Router>
      
      
    </div>
  );
}

export default App;
