import React from 'react';
import "../Card/Card.scss";

const productos = [
    {
        name:"Manta de eucaliptus | tinte natural", 
        price: "$30.000 clp", 
        image: require('../assets/imgs/manta.png')
    }
]

const NaturalProductCard = ({ name, price, image}) => (
    <div className="natural-product-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{price}</p>
    </div>
  );

const Cards = () => {
    return (
        <div>
            {productos.map((producto, index) => {
                return (
                    <NaturalProductCard key={index} name={producto.name} price={producto.price} image={producto.image}/>
                )
                        
            })}
        </div>
   
    )
}


export default Cards;