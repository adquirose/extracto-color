import React from 'react'
import Card from '../Card'
import './styles.css'

const productos = [
    {
        name:'Manta de eucaliptus | tinte natural', 
        price: '$30.000 clp', 
        image: 'https://cdn.shopify.com/s/files/1/0402/1990/2109/collections/8e6f72342908b72b75e4384cc11716e9_720x.jpg?v=1666524971'
    },
    {
        name:'Toalla | tinte natural', 
        price: '$20.000 clp', 
        image: 'https://cdn.shopify.com/s/files/1/0402/1990/2109/collections/8e6f72342908b72b75e4384cc11716e9_720x.jpg?v=1666524971'
    },
    {
        name:'Toalla | tinte natural', 
        price: '$20.000 clp', 
        image: 'https://cdn.shopify.com/s/files/1/0402/1990/2109/collections/8e6f72342908b72b75e4384cc11716e9_720x.jpg?v=1666524971'
    },
    {
        name:'Toalla | tinte natural', 
        price: '$20.000 clp', 
        image: 'https://cdn.shopify.com/s/files/1/0402/1990/2109/collections/8e6f72342908b72b75e4384cc11716e9_720x.jpg?v=1666524971'
    }
]
export default function Productos() {
  return (
    <div className='section'>
        <h2 className='text-center color-primary'>OUR PRODUCTS</h2>
        <div className='products-container'>
            {productos.map( (producto,index) => <Card key={index} {...producto}/>)}
        </div>
    </div>
  )
}
