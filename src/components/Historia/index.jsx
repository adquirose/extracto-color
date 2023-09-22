import { Container, Image, Title, P } from './styles'
import Img from '../../assets/images/historia.jpg'

function Historia() {
  return (
    <Container id="historia">
        <Image src={Img} alt="img-historia"/>
        <Title>Historia</Title>
        <P>Hola! Mi nombre es Flor, soy diseñadora de indumentaria y textil y fundadora de Maleza.
            Cuando me propuse crear mi marca, decidí que quería trabajar conforme a mis valores. 
            Mi prioridad siempre es crear un producto que sea sustentable, artesanal, 
            vegano y que respete y cuide el planeta...
        </P>
        <button>Ver Más</button>
    </Container>
  )
}

export default Historia
