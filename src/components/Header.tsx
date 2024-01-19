import images from '../constants/images'
import Container from './Container'
import HeadingImage from './HeadingImage'
import './Header.css'
import SubHeader from './SubHeader'

const Header = ({}) => {
  return (
    <div className="header">
     <Container>
        <SubHeader image={images.spoon} />
        <HeadingImage image={images.welcome} />
     </Container>
    </div>
  )
}

export default Header