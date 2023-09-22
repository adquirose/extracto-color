import styled, { css, keyframes} from 'styled-components'

const listIn = keyframes`   
  0% {
    left:-265px;
  }
  100% {
    left:0;
  }
`;
const listOut = keyframes`   
  0% {
    left:0;
  }
  100% {
    left:-265px;
  }
`;

export const Navigator = styled.nav`
    height:70px;
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    position:absolute;
    top:0;
`
export const Nav = styled.div`
  height:auto;
  width:100%;
  position:relative;
`
export const Img = styled.img`
    
`

export const ListContainer = styled.div`
  position:relative;
  width:260px;
  height:100vh;
  left:-265px;
  z-index:10;
  background:white;
  animation:${({$openList}) => {
    switch($openList){
      case true:
        return css`${listIn} 0.3s ease-out forwards`;
      case false:
        return css`${listOut} 0.3s ease-out forwards`;
      default :
        break;
    }}
  };    
`
export const Ul = styled.ul`
    display:flex;
    flex-direction:column;
    justify-content:center;
    padding-left:24px;
    margin:0;
    height:calc(100% - 100px); 
`

export const Span = styled.span`
    padding-bottom:${props =>  props.$paddingBottom || 0};
`
export const ButtonContainer = styled.div`
    width:100%;
    display:flex;
    justify-content: ${props => props.$justifyContent || 'start' };
    align-items: ${props => props.$alignItems || 'start' };
    padding-left:5px;
    padding-right:5px;
`
export const Button = styled.button`
    border:0;
    background:none;
    padding:0;
    height:40px;
    width:32px;
    &:focus{
        border:0;
        outline: none !important;
    }
`
export const ImgContainer = styled.div`
    display:flex;
    justify-content:center;
    min-width:200px;
    height:60px;
`