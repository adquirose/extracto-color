import React from 'react';

function Profile({width, height, color}) {
	
	return (
		<svg height={height} width={width} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <g fill={color} stroke={color} strokeLinecap="square" strokeLinejoin="miter" strokeMiterlimit="10" strokeWidth="3">
                <path d="M19,20h-6 c-4.971,0-9,4.029-9,9v0c0,0,4.5,2,12,2s12-2,12-2v0C28,24.029,23.971,20,19,20z" fill="none" stroke={color}/>
                <path d="M9,8c0-3.866,3.134-7,7-7 s7,3.134,7,7s-3.134,8-7,8S9,11.866,9,8z" fill="none"/>
            </g>
        </svg>
	);
};

export default Profile;