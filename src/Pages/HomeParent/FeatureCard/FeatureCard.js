import React from 'react';
import '../Home/Home.css'
import { BiBus } from 'react-icons/bi';
import {  BsFillArrowRightCircleFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const FeatureCard = ({ feature }) => {
    const { title, id, img, shortDecs } = feature;

    return (
        <div className='feature-card'>
            <img src={img} alt="" />

            <div className="feature-info">
                <div className='feature-icon'>
                    <BiBus />
                </div>

                <div className="info-details">
                    <h4>{title}</h4>
                    <p>{shortDecs}</p>
                    <Link to='/feature-details'>
                        See More <BsFillArrowRightCircleFill />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default FeatureCard;