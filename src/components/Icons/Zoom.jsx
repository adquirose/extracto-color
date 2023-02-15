import React from 'react';

function Zoom({width, height, color}) {
	return (
		<svg height={height} width={width} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <g fill={"#212121"} stroke={color} strokeLinecap="square" strokeLinejoin="miter" strokeMiterlimit="10" strokeWidth="3">
                <line fill="none" x1="29" x2="20.777" y1="29" y2="20.777"/>
                <circle cx="13" cy="13" fill="none" r="11" stroke={color}/>
            </g>
        </svg>
	);
};

export default Zoom;