import {BrowserRouter as Router ,Switch, Route} from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Navigation from './components/Navigation';
import products from './Pages/products';
import Cart from "./Pages/Cart";
import SingleProduct from './Pages/SingleProduct';
const App = () =>
{
    return(
    <>
        <Router>
            <Navigation/>

            <Switch>
                <Route path="/" component={Home} exact></Route>
                <Route path="/about" component={About}></Route>
                <Route path="/products" component={products} exact></Route>
                <Route path="/products/:_id" component={SingleProduct} exact></Route>
                <Route path="/cart" component={Cart}></Route>
            </Switch>
        </Router>
    </>
    )
}

export default App;