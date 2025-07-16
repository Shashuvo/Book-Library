import React from 'react';
import { Features } from 'tailwindcss';
import PricingFeatures from './PricingFeatures';

const PricingCards = ({pricing}) => {
    const  {name, price, description, features} = pricing;
    return (
        <div className='border bg-blue-400 rounded-3xl p-6'>
            {/* card header */}
            <div>
                <h1 className='text-3xl'>{name}</h1>
                <h4 className='text-2xl'>{price}</h4>
            </div>

            {/* card body */}
            <div className='bg-blue-200 rounded-3xl p-4 mt-4'>
                <p>{description}</p>
                {
                    features.map((feature, index) => <PricingFeatures key={index} feature={feature}></PricingFeatures> )
                }
            </div>
        </div>
    );
};

export default PricingCards;