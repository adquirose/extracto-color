// eslint-disable-next-line react/prop-types
function Menu({width = 32, height = 32, color = 'black'}) {
	return (
		<svg height={height} width={width} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <g fill={color}>
                <path d="M30,13H2c-0.6,0-1,0.4-1,1v4c0,0.6,0.4,1,1,1h28c0.6,0,1-0.4,1-1v-4C31,13.4,30.6,13,30,13z"/>
                <path d="M30,3H2C1.4,3,1,3.4,1,4v4c0,0.6,0.4,1,1,1h28c0.6,0,1-0.4,1-1V4C31,3.4,30.6,3,30,3z" fill="#000000"/>
                <path d="M30,23H2c-0.6,0-1,0.4-1,1v4c0,0.6,0.4,1,1,1h28c0.6,0,1-0.4,1-1v-4C31,23.4,30.6,23,30,23z" fill="#000000"/>
            </g>
        </svg>
    );
}
export default Menu;