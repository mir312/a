import { Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Contacts from "./Pages/Contacts/Contacts";
import Delivery from "./Pages/Delivery/Delivery";
import Category from "./Pages/Category/Category";
import NotFound from "./Pages/NotFound/NotFound";
import { createContext, useEffect, useState } from "react";
import { onAuthChange, onCategoriesLoad, onOrdersLoad, onProductsLoad } from "./firebase";
import Product from "./Pages/Product/Product";
import { Cart } from "./Pages/Cart/Cart";
import ThankYou from "./Pages/ThankYou/ThankYou";
import Orders from "./Pages/Orders/Orders";
import CategoryList from "./Components/CategoryList/CategoryList";
import ProductList from "./Components/ProductList/ProductList";

export const AppContext = createContext({
  categories: [],
  products: [],
  orders: [],
  cart: {},
  setCart: () => { },
  user: null,
});

function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || {};
  });

  const [user, setUser] = useState(null);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    onCategoriesLoad(setCategories);
    onProductsLoad(setProducts);
    onOrdersLoad(setOrders);

    onAuthChange(user => {
      if(user) {
        user.isAdmin = user && user.email === "almazdjanaliev@gmail.com";
      }

      setUser(user);
    })
  }, []);



  return (
    <div className="App">
      <CategoryList />
      ProductList - <ProductList />
      <AppContext.Provider value={{ categories, products, cart, setCart, user, orders }} >
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/delivery" element={<Delivery />} />
            <Route path="/categories/:slug" element={<Category />} />
            <Route path="/products/:slug" element={<Product />} />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="/orders" element={<Orders />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </AppContext.Provider>
    </div>
  );
}

export default App;

import { useContext } from "react";
import { useMatch } from "react-router-dom"
import { AppContext } from "../../App";
import NotFound from "../NotFound/NotFound";
import { AddToCart } from "../../Components/AddToCart/AddToCart";

export default function Product() {
  const { params } = useMatch("/products/:slug");
  const { products } = useContext(AppContext);

  const product = products.find(product => product.slug === params.slug);

  if (!product) {
    return <NotFound />
  }

  return (
    <div className="Product">
      <div>
        <img src={product.picture} alt={product.name} />
      </div>
      <div>
        <h1>{product.name}</h1>
        <p><strong>Price:</strong> {product.price}$</p>
        <p><strong>Description: </strong>{product.description}</p>
        <AddToCart product={product} />
      </div>
    </div>
  )
}