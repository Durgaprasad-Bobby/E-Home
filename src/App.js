import { Route,Routes  } from 'react-router-dom';
import './App.css'
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import PlaceOrder from './pages/PlaceOrder';
import ConfirmOrder from './pages/ConfirmOrder';


const App = () => {
  return (
     <Routes>
      <Route path="/"element={<ProductList/>}/>
      <Route path="/products/:id"element={<Product/>}/>
      <Route path="/Cart"element={<Cart/>}/>
      <Route path="/Signin"element={<Login/>}/>
      <Route path="/signUp"element={<SignUp/>}/>
      <Route path="/AboutUs"element={<AboutUs/>}/>
      <Route path="/ContactUs"element={<ContactUs/>}/>
      <Route path="/PlaceOrder"element={<PlaceOrder/>}/>
      <Route path="/ConfirmOrder"element={<ConfirmOrder/>}/>
    </Routes>
  );
};

export default App;