// eslint-disable-next-line react/prop-types
function Search({width = 32, height = 32, color = 'black'}) {
	// const { width } = props
	return (
		<svg height={height} width={width} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <g fill={color} stroke="#000000" strokeLinecap="square" strokeLinejoin="miter" strokeMiterlimit="10" strokeWidth="2">
                <line fill="none" x1="29" x2="20.777" y1="29" y2="20.777"/>
                <circle cx="13" cy="13" fill="none" r="11" stroke="#000000"/>
            </g>
        </svg>
	);
}
export default Search