import React from 'react';

function ShoppingBag({width, height, color}) {

	return (
		<svg height={height} width={width} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <g fill="#212121" stroke={color} strokeLinecap="square" strokeLinejoin="miter" strokeMiterlimit="10" strokeWidth="3">
                <path d="M26.541,31H5.459a3,3,0,0,1-2.97-3.424L5,10H27l2.511,17.576A3,3,0,0,1,26.541,31Z" fill="none" stroke={color}/>
                <path d="M11,15V6a5,5,0,0,1,5-5h0a5,5,0,0,1,5,5v9" fill="none"/>
            </g>
        </svg>
	);
};

export default ShoppingBag;