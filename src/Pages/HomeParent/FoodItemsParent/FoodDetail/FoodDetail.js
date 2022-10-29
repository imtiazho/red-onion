import React, { useContext, useEffect, useState } from 'react';
import './FoodDetails.css'
import { useParams } from 'react-router-dom';
import useFood from '../../../Shared/Hooks/useFood';
import { AiOutlineShoppingCart } from 'react-icons/ai';

// Break Fast
import breakfst1 from '../../../../images/breakfast/breakfast1.png'
import breakfst2 from '../../../../images/breakfast/breakfast2.png'
import breakfst3 from '../../../../images/breakfast/breakfast3.png'

// Lunch
import lunch1 from '../../../../images/lunch/lunch1.png'
import lunch2 from '../../../../images/lunch/lunch2.png'
import lunch3 from '../../../../images/lunch/lunch3.png'

// Dinner
import dinner1 from '../../../../images/dinner/dinner1.png'
import dinner2 from '../../../../images/dinner/dinner2.png'
import dinner3 from '../../../../images/dinner/dinner3.png'
import { CartContext } from '../../../../App';
import { getStoredCart, ManageLocalStorage } from '../../../../ManageLocalStorage/ManageLocalStorage';


const FoodDetail = () => {
    const { foodId } = useParams()
    const [quantity, setQuantity] = useState(1);
    const [cart, setCart] = useContext(CartContext);

    let relatedPictures;
    if (foodId.includes('B')) {
        relatedPictures = [
            { id: 1, img: breakfst1 },
            { id: 2, img: breakfst2 },
            { id: 3, img: breakfst3 }
        ]
    }
    else if (foodId.includes('L')) {
        relatedPictures = [
            { id: 4, img: lunch1 },
            { id: 5, img: lunch2 },
            { id: 6, img: lunch3 }
        ]
    }
    else {
        relatedPictures = [
            { id: 7, img: dinner1 },
            { id: 8, img: dinner2 },
            { id: 9, img: dinner3 }
        ]
    }
 
    const { data } = useFood('https://mocki.io/v1/2d7938c9-278a-48ad-bbbb-9fc172e5a2e0');

    const selectedFood = data.find(food => food.id === foodId);


    const haandleAddToCart = (itemToAdd) => {
        let newCart = [];

        const exist = cart.find(product => product.id === itemToAdd.id);
        if (!exist) {
            itemToAdd.quantity = 1;
            newCart = [...cart, itemToAdd]
        }
        else {
            const rest = cart.filter(product => product.id !== itemToAdd.id);
            exist.quantity = exist.quantity + 1;
            newCart = [...rest, exist];
        }

        setCart(newCart);

        ManageLocalStorage(itemToAdd.id)
    }

    return (
        <div className='food-detail-card'>
            <div className="info">
                <h1>{selectedFood?.name}</h1>
                <p className='food-decs'>{selectedFood?.FullDesc}</p>
                <div className="price-quantity">
                    <h3>${selectedFood?.price}</h3>

                    <div className="quantity-controller">
                        <p>Delivery charge free<span>*</span></p>
                    </div>
                </div>
                <button onClick={() => haandleAddToCart(selectedFood)} className='cart-btn'>
                    <AiOutlineShoppingCart />
                    <span>Add</span>
                </button>

                <div className="relatedPicture-slide">
                    <p>Related Items</p>
                    <div className="images">
                        {
                            relatedPictures.map(relatedPicture => (
                                <div key={relatedPicture.id}>
                                    <img src={relatedPicture.img} />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

            <div className="targetedImage">
                <img src={selectedFood?.img} alt="" />
            </div>
        </div>
    );
};

export default FoodDetail;