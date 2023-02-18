import React from 'react'
import Card from '../Card'
import './styles.css'

const productos = [
    {
        name:'Manta de eucaliptus | tinte natural', 
        price: '$30.000 clp', 
        image: './src/assets/img1.jpg'
    },
    {
        name:'Toalla | tinte natural', 
        price: '$20.000 clp', 
        image: './src/assets/img1.jpg'
    },
    {
        name:'Toalla | tinte natural', 
        price: '$20.000 clp', 
        image: './src/assets/img1.jpg'
    },
    {
        name:'Toalla | tinte natural', 
        price: '$20.000 clp', 
        image: './src/assets/img1.jpg'
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
