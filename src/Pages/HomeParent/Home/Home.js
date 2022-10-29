import React, { useContext, useEffect } from 'react';
import { CartContext } from '../../../App';
import { getStoredCart } from '../../../ManageLocalStorage/ManageLocalStorage';
import Footer from '../../Shared/Footer/Footer';
import useFood from '../../Shared/Hooks/useFood';
import NavBar from '../../Shared/NavBar/NavBar';
import Features from '../Features/Features';
import FoodItemsParent from '../FoodItemsParent/FoodItemsParent';
import TopBaner from '../TopBaner/TopBaner';

const Home = () => {
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
        <div>
            <NavBar />
            <TopBaner />
            <FoodItemsParent />
            <Features />
            <Footer />
        </div>
    );
};

export default Home;