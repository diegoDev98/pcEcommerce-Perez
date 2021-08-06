import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import { CartProvider } from './components/CartContext';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import Contact from './components/Contact/Contact'

function App() {
  
  return (
    <div >
      <Router>
      <CartProvider>
        <NavBar />
        <Route path="/cart">
          <Cart/>
        </Route>
        <Route exact path="/">
          <Home/>
        </Route> 
        <Route path="/item/:id">
          <ItemDetailContainer className="itemDetailContainer" />
        </Route>
        <Route exact path={['/category/:category','/products']}>
          <ItemListContainer greeting ="Bienvenido a DiegoTech"/>
        </Route>
        <Route path ="/checkout">
          <Checkout/>
        </Route>
        <Route path ="/contact">
          <Contact/>
        </Route>
        <Footer />
        </CartProvider>
      </Router>
      
      
    </div>
  );
}

export default App;
