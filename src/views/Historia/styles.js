import styled from "styled-components";

export const Wrapper = styled.div`
    background:#f6e7df;
    width:100%;
    height:auto;
`
export const Container = styled.div`    
    padding-top:70px;
    padding-bottom:70px;
    padding-left:12px;
    padding-right:12px;
`
export const Image = styled.img`
    width:100%;
    max-width:450px;
    box-sizing:border-box;
`
export const Title = styled.h2`
    font-weight: 500;
    text-align:center;
    font-size:1.5rem;
    font-family: 'Libre Baskerville', serif;
`
export const P = styled.p`
    text-align:center;
    font-size: 0.9rem;
    font-weight: 300;
    line-height: 1.25;
    margin:0;
    padding:12px;
`
export const Button = styled.button`
    display:block;
    background-color:#d38e76;
    font-weight: 400;
    font-size: 1rem;
    border: none;
    overflow: visible;
    font: inherit;
    color: white;
    text-transform: none;
    -webkit-appearance: none;
    border-radius: 0;
    box-sizing: border-box;
    padding: 0 30px;
    vertical-align: middle;
    font-size: .875rem;
    line-height: 38px;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color;
`
export const ButtonGroup = styled.div`
    width:100%;
    display:flex;
    justify-content:center;
    padding: 20px 0;
`