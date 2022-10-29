import React from 'react';
import './Home.css';
import useFood from '../../Shared/Hooks/useFood';
import FoodItemCard from '../FoodItemsParent/FoodItemCard/FoodItemCard';

const Breakfast = () => {
    const {data} = useFood('breakfast.json')
    return (
        <div className='food-container'>
            {
                data.map(food => <FoodItemCard
                    food={food}
                    key={food.id}
                ></FoodItemCard>)
            }
        </div>
    );
};

export default Breakfast;