import { SquareCheckBig } from 'lucide-react';
import React from 'react';

const PricingFeatures = ({feature}) => {
    return (
        <p className='flex mt-4'><SquareCheckBig className='mr-2'></SquareCheckBig> {feature}</p>
    );
};

export default PricingFeatures;