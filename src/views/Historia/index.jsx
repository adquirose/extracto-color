
import { Wrapper, Container, Image, Title, P, Button, ButtonGroup } from './styles'
import Img from '../../assets/images/historia.jpg'

function Historia() {
  return (
    <Wrapper>
      <Container id="historia">
          <Image src={Img} alt="img-historia"/>
          <Title>Historia</Title>
          <P>
            Hola! Mi nombre es Flor, soy diseñadora de indumentaria y textil y fundadora de Maleza.
            <br/>
            <br/>
            Cuando me propuse crear mi marca, decidí que quería trabajar conforme a mis valores. 
            Mi prioridad siempre es crear un producto que sea sustentable, artesanal, 
            Vegano y que respete y cuide el planeta...
          </P>
          <ButtonGroup>
            <Button to="/historia">Ver Más</Button>
          </ButtonGroup>
      </Container>
    </Wrapper>
  )
}

export default Historia
