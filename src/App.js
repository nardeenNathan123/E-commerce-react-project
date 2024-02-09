import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter, Route, Switch} from "react-router-dom"
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import NotFound from './Pages/NotFound';

import SignUp from './Pages/SignUp';
import Login from './Pages/Login';

import ProductList from './Pages/ProductList';
import ProductDetails from './Pages/ProductDetails';
import Cart from './Pages/Cart';
import FavoritesPag from './Pages/FavoritesPage';
import Checkout from './Pages/Checkout'

// import Favorites from './Pages/Favorites'; 






function App() {
  return (
    <div>
        <BrowserRouter> 
          <Navbar />
          <Switch> 
              <Route exact path={"/"} component={Home} /> 
              <Route exact path={"/SignUp"} component={SignUp} />
              {/* <Route exact path={"/Productlist"} component={Productlist}/> */}
              <Route exact path={"/product/:productId"} component={ProductDetails} />
              <Route exact path={"/ProductList"} component={ProductList}></Route>
              <Route exact path={"/Login"} component={Login} ></Route>
              <Route exact path={"/SignUp"} component={SignUp} ></Route>
              <Route exact path={"/Cart"} component={Cart} />
              <Route exact path={"/Checkout"} component={Checkout} />
              <Route exact path={"/Favorites"} component={FavoritesPag} />

              <Route exact path={"*"} component={NotFound} />
            </Switch> 
        </BrowserRouter>
        
    </div>
  );
}

export default App;
