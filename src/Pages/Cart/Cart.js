import React, { useContext, useEffect } from 'react';
import { CartContext } from '../../App';
import { getStoredCart } from '../../ManageLocalStorage/ManageLocalStorage';
import CartCalculation from '../CartCalculation/CartCalculation';
import CartItem from '../CartItem/CartItem';
import useFood from '../Shared/Hooks/useFood';
import './Cart.css'

const Cart = () => {
    const [cart, setCart] = useContext(CartContext);

    const { data } = useFood('https://mocki.io/v1/2d7938c9-278a-48ad-bbbb-9fc172e5a2e0');

    
    // Get cart from local storeage
    useEffect(() => {
        const storedCart = getStoredCart();
        let savedCart = [];

        for(const id in storedCart){
            const addedProduct = data.find(product => product.id === id);

            if(addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
                // console.log(addedProduct)
            }
        }
        setCart(savedCart);
    }, [data, setCart])

    
    return (
        <div className='cart'>
            <div className="ordered-items">
                {
                    cart.map(item => <CartItem
                        key={item.id}
                        item={item}
                    ></CartItem>)
                }
            </div>
            
            <div className="cart-calculation">
                <CartCalculation
                    cart={cart}
                ></CartCalculation>
            </div>
        </div>
    );
};

export default Cart;