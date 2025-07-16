import React from 'react';

const Link = ({route}) => {
    return (
        <li className='md:mr-10 hover:bg-blue-700 hover:px-3'>
            <a href={route.path}>{route.name}</a>
        </li>
    );
};

export default Link;