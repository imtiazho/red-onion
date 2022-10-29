import React from 'react';
import useFood from '../../Shared/Hooks/useFood';
import FoodItemCard from '../FoodItemsParent/FoodItemCard/FoodItemCard';

const Lunch = () => {
    const {data} = useFood('lunch.json')
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

export default Lunch;