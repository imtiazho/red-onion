import React from 'react';
import '../Home/Home.css'
import FeatureImg1 from '../../../images/feature-1.png'
import FeatureImg2 from '../../../images/feature-2.png'
import FeatureImg3 from '../../../images/feature-3.png'
import FeatureCard from '../FeatureCard/FeatureCard';

const featuresData = [
    {
        id: "F1",
        img: FeatureImg1,
        title: "Fast Delivery",
        shortDecs: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni, quas.",
        longDecs: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit esse blanditiis distinctio harum explicabo vitae et, adipisci inventore alias, doloribus quo qui quasi at soluta rerum iure obcaecati. Magni nisi doloribus repudiandae veniam? Distinctio quod accusamus quisquam natus eos, in, magnam maiores nihil rerum est cumque culpa cum, nam reiciendis."
    },
    {
        id: "F2",
        img: FeatureImg2,
        title: "A Good Auto Responder",
        shortDecs: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni, quas.",
        longDecs: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit esse blanditiis distinctio harum explicabo vitae et, adipisci inventore alias, doloribus quo qui quasi at soluta rerum iure obcaecati. Magni nisi doloribus repudiandae veniam? Distinctio quod accusamus quisquam natus eos, in, magnam maiores nihil rerum est cumque culpa cum, nam reiciendis."
    },
    {
        id: "F3",
        img: FeatureImg3,
        title: "Home Delevery",
        shortDecs: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni, quas.",
        longDecs: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit esse blanditiis distinctio harum explicabo vitae et, adipisci inventore alias, doloribus quo qui quasi at soluta rerum iure obcaecati. Magni nisi doloribus repudiandae veniam? Distinctio quod accusamus quisquam natus eos, in, magnam maiores nihil rerum est cumque culpa cum, nam reiciendis."
    }
]



const Features = () => {
    return (
        <div className='features-container'>
            <h1>Why you choose us</h1>
            <p className='features-subtitle'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae alias nesciunt architecto voluptatum nihil quas.</p>
        
            <div className="features">
                {
                    featuresData.map(feature => <FeatureCard
                        key={feature.id}
                        feature={feature}
                    ></FeatureCard>)
                }
            </div>
        </div>
    );
};

export default Features;