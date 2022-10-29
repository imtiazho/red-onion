import React from 'react';
import useFood from '../../Shared/Hooks/useFood';
import FoodItemCard from '../FoodItemsParent/FoodItemCard/FoodItemCard';

const Dinner = () => {
    const {data} = useFood('dinner.json')
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

export default Dinner;