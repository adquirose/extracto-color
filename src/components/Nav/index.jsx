/* eslint-disable react/prop-types */
import { useState } from 'react'
import { Nav as NavContainer, Navigator, Img, ImgContainer, ButtonContainer, Button, Span, Ul, ListContainer } from './styles'
import { Cart, Search, Menu, Close } from '../Icons'
import Logo from '../../assets/logo.png'
import { NavLink } from 'react-router-dom'

function List({ openList, onClick, style }){
  return(
    <ListContainer $openList={openList}>
      <Button style={{position:'absolute',top:15, right:15}} onClick={onClick}>
        <Close width={20} height={20}/>
      </Button>
      <Ul>
        <NavLink style={style} to="/" onClick={onClick}>Inicio</NavLink>
        <NavLink style={style} to="/productos" onClick={onClick}>Productos</NavLink>
        <NavLink style={style} to="/historia" onClick={onClick}>Historia</NavLink>
        <NavLink style={style} to="/preguntas-frecuentes" onClick={onClick}>Preguntas Frecuentes</NavLink>
        <NavLink style={style} to="/mayoristas" onClick={onClick}>Mayoristas</NavLink>
        <NavLink style={style} to="/contacto" onClick={onClick}>Contacto</NavLink>
        <hr/>
        <NavLink style={style} to="/crear-cuenta">Crear Cuenta</NavLink>
        <NavLink style={style} to="/iniciar-sesion">Iniciar sesión</NavLink>
      </Ul>
    </ListContainer>
  )
}

function Nav({style}) {
  const [openList, setOpenList] = useState(undefined)
  const handleOnclick = () => {
    if(openList == 'undefined'){
      setOpenList(false)
    }else{
      setOpenList(!openList)
    }
  }
  return (
    <NavContainer>
      { openList && <div onClick={handleOnclick} style={{position:'absolute', top:0, zIndex:9, background:'black', opacity:0.125, width:'100vw', height:'100vh'}}/>}
      <List openList={openList} onClick={handleOnclick} style={style}/>
      <Navigator>
        <ButtonContainer $justifyContent="start">
          <Button onClick={handleOnclick}>
            <Menu width={20} height={20}/>
          </Button>
        </ButtonContainer>
          <ImgContainer>
            <Img src={Logo} alt='img-logo'/>
          </ImgContainer>
        <ButtonContainer $alignItems="center" $justifyContent="space-between">
          <Button>
            <Search width={20} height={20}/>
          </Button>
          <Button>
            <Cart width={20} height={20}/>
          </Button>
          <Span $paddingBottom="5px">0</Span>
        </ButtonContainer>
      </Navigator>
    </NavContainer>
  )
}

export default Nav