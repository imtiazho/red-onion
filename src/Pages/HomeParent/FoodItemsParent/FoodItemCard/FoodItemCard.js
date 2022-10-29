import React from 'react';
import '../../Home/Home.css'
import { Link } from 'react-router-dom';

const FoodItemCard = ({ food }) => {
    const { name, id, img, shortDesc, price } = food;

    let path;
    if(id.includes('B')){
        path = 'breakfast';
    }
    else if(id.includes('L')){
        path = 'lunch';
    }
    else{
        path = 'dinner';
    }
    
    return (
        <Link to={`/${path}/${id}`} className='food-card'>
            <img src={img} alt={`Picture of ${name}`} />
            
            <div className="food-info">
                <h4>{name}</h4>
                <p><small>{shortDesc}</small></p>
                <h3>$ {price}</h3>
            </div>
        </Link>
    );
};

export default FoodItemCard;