// eslint-disable-next-line react/prop-types
function Cart({height = 32, width = 32, color = 'black'}) {
	return (
		<svg height={height} width={width} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <g fill={color}>
                <path d="M8,21c-1.105,0-2-.895-2-2v-1H26c.451,0,.846-.302,.965-.737l3-11c.145-.533-.169-1.083-.702-1.228-.086-.023-.174-.035-.263-.035H6V1c0-.552-.448-1-1-1H1C.448,0,0,.448,0,1H0C0,1.552,.448,2,1,2h3V19c0,2.209,1.791,4,4,4H30c.552,0,1-.448,1-1h0c0-.552-.448-1-1-1H8Z" fill={color}/>
                <circle cx="7" cy="29" r="3"/>
                <circle cx="28" cy="29" r="3"/>
            </g>
        </svg>
    );
}
export default Cart;