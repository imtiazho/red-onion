import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/HomeParent/Home/Home';
import NotFounded from './Pages/NotFounded/NotFounded';
import Breakfast from './Pages/HomeParent/Home/Breakfast'
import Lunch from './Pages/HomeParent/Home/Lunch'
import Dinner from './Pages/HomeParent/Home/Dinner'
import FoodDetail from './Pages/HomeParent/FoodItemsParent/FoodDetail/FoodDetail';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import { Toaster } from 'react-hot-toast';
import Cart from './Pages/Cart/Cart';
import { createContext, useState } from 'react';
import Shipping from './Pages/Shipping/Shipping';
import ConfirmOrder from './Pages/ConfirmOrder/ConfirmOrder';
import RequirAuth from './RequirAuth/RequirAuth';

export const CartContext = createContext()

function App() {
  const [cart, setCart] = useState([])
  return (
    <CartContext.Provider value={[cart, setCart]}>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route path='breakfast' element={<Breakfast />} />
          <Route path='/breakfast/:foodId' element={<FoodDetail />}></Route>
          <Route path='/lunch/:foodId' element={<FoodDetail />}></Route>
          <Route path='/dinner/:foodId' element={<FoodDetail />}></Route>
          <Route path='lunch' element={<Lunch />} />
          <Route path='dinner' element={<Dinner />} />
        </Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/shipping' element={
          <RequirAuth>
            <Shipping />
          </RequirAuth>
        }></Route>
        <Route path='/confirmOrder' element={<ConfirmOrder />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='/*' element={<NotFounded />}></Route>
      </Routes>
      < Toaster />
    </CartContext.Provider>
  );
}

export default App;
