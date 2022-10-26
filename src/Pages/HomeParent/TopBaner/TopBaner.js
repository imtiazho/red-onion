import React from 'react';
import '../Home/Home.css'

const TopBaner = () => {
    return (
        <div className='top-banner'>
            <h1>Best Food waiting for your next meal</h1>
            <div className="search-box">
                <input placeholder='Search food item' type="text" />
                <button>Search</button>
            </div>
        </div>
    );
};

export default TopBaner;