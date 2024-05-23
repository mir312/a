
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';



import About from './Pages/About/About';
import Home from './Pages/Home/Home';
import Contacts from './Pages/Contacts/Contacts';
import Order from './Pages/Order/Order';
import Delivery from './Pages/Delivery/Delivery';
import Sale from './Pages/Sale/Sale';
import Cart from './Pages/Cart/Cart';
import NotFound from './Pages/NotFound/NotFound';
import Kids from './Pages/Kids/Kids';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import {onAuthChange, onCategoriesLoad,onOrdersLoad, onProductsLoad
} from "./firebase"
import { createContext, useEffect, useState } from 'react';
import CategoryList from './Components/CategoryList/CategoryList';
export const AppContext = createContext({
categories: [],
products: [],
orders : [],
cart: {},
setCart: () => { },
user: null,
});
function App() {
  const [categories,setCategories] = useState([]);
  const [products,setProducts] = useState([]);
  const [orders,setOrders] = useState([]);
  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || {};
  });
  const [user, setUser] = useState(null);
  useEffect(() => {
    onCategoriesLoad(setCategories);
    onProductsLoad(setProducts);
    onOrdersLoad(setOrders);
    onAuthChange(user => {
      if(user){
        user.isAdmin = user && user.email === "dakievameerim0@gmail.com";
      }
      setUser(user);
    })
  } , []);


  return (
    <div className='App'>
      <Router>
        <Header />
        <CategoryList />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="kids" element={<Kids />} />
            <Route path="contacts" element={<Contacts />} />
       
            <Route path="order" element={<Order />} />
            <Route path="delivery" element={<Delivery />} />
            <Route path="sale" element={<Sale />} />
            <Route path="cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
