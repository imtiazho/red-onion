import React, { useContext, useState } from 'react';
import { BsTrash } from 'react-icons/bs';
import { CartContext } from '../../App';
import { handleRemoveItem } from '../../ManageLocalStorage/ManageLocalStorage';
import '../Cart/Cart.css'

const CartItem = ({ item }) => {
    const { img, name, price, quantity, id } = item;
    const [cart, setCart] = useContext(CartContext);

    const handleRevome = (id) => {
        const restProduct = cart.filter(product => product.id !== id);
        setCart(restProduct)
        handleRemoveItem(id)
    }

    return (
        <div className='item'>
            <img src={img} alt="" />

            <div className="cart-info">
                <p>{name.length > 12 ? name.slice(0, 12) + "..." : name}</p>
                <h4>$ {price}</h4>
            </div>

            <div className="change-quantity">
                <p>{quantity}</p>
                <button onClick={() => handleRevome(id)}><BsTrash /></button>
            </div>
        </div>
    );
};

export default CartItem;