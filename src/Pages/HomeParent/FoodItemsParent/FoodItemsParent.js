import React, { useContext } from 'react';
import CustomLink from '../../Shared/CustomLink/CustomLink';
import '../Home/Home.css'
import { Link, Outlet, useNavigate } from "react-router-dom";
import { CartContext } from '../../../App';

const FoodItemsParent = () => {
    const [cart, setCart] = useContext(CartContext);
    const navigate = useNavigate();

    return (
        <div className='foodItems-container'>
            <div className="items-short-nav">
                <CustomLink to='/breakfast'>Breakfast</CustomLink>
                <CustomLink to='/lunch'>Lunch</CustomLink>
                <CustomLink to='/dinner'>Dinner</CustomLink>
            </div>

            <Outlet />

            <button onClick={() => navigate('/cart')} className={cart.length > 0 ? 'checkout-btn' : 'checkout-btn-disabled'} disabled={cart.length < 0}>Checkout Your Food</button>
        </div>
    );
};

export default FoodItemsParent;