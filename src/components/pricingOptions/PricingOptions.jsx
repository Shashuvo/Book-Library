import React, { use } from 'react';
import PricingCards from '../pricingCards/PricingCards';

const PricingOptions = ({pricingPromise}) => {
    const pricingData = use(pricingPromise);
    
    return (
        <div className='mx-10 mt-4'>
            <h2 className='text-4xl font-bold'>Get Our Membership</h2>
            <div className='grid md:grid-cols-3 gap-8 mt-6'>
                {
                    pricingData.map(pricing => <PricingCards key={pricing.id} pricing={pricing}></PricingCards>)
                }
            </div>
        </div>
    );
};

export default PricingOptions;