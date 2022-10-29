import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Cart/Cart.css'

const CartCalculation = ({ cart }) => {
    const navigate = useNavigate()
    let subTotal = 0;

    for (const item of cart) {
        subTotal = item.price + subTotal * item.quantity;
    }
    let tax = parseFloat((subTotal * 0.1).toFixed(0));
    const total = subTotal + tax;

    return (
        <div className='cart-calculation'>
            <h3>Order Summary</h3>

            <div className="calculate-item">
                <div className="each-info">
                    <p>Sub-total:</p> 
                    <p>$ {subTotal}</p>
                </div>

                <div className="each-info">
                    <p>Tax: </p>
                    <p>$ {tax}</p>
                </div>

                <div className="each-info">
                    <h4>Total:</h4> 
                    <h4>$ {total.toFixed(2)}</h4>
                </div>
            </div>

            <button onClick={()=> navigate('/shipping')} className={ cart.length > 0 ? 'place-order-btn' : 'place-order-btn-disabled'} disabled={cart.length < 0}>Place Order</button>
        </div>
    );
};

export default CartCalculation;