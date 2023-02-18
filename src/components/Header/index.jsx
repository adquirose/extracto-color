import React from 'react'
import Bg from '../../assets/header.jpg'

export default function Header() {
    const style = {
        backgroundImage: `url(${Bg})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        width: '100%',
        height:'475px'
    }
    const filter = {
        backgroundColor:'rgba(104,88,88,0.4)',
        with:'100%',
        height:'100%',
        zIndex:1
    }
    const styleTextContainer = {
        display:'flex',
        height:'100%',
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        zIndex:2
    }
    const styleText = {
        textShadow:'0 0 4px rgb(0,0,0 / 40%)',
        fontSize:'4.3rem',
        color:'white',
        zIndex:5,
        fontFamily:'Libre Baskerville',
        fontWeight:'normal'
        
    }
    return (
        
            <div style={style}>
                <div style={filter}>
                    <div style={styleTextContainer}>
                        <h1 style={styleText}>Natural Dyes</h1>
                    </div>
                </div>
            </div>
        
    )
    
}
