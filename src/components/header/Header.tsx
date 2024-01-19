import images from '../../constants/images'
import HeadingImage from './HeadingImage'
import './Header.css'
import SubHeader from './SubHeader'

const Header = ({}) => {
  return (
    <div className="header section" id='header'>
     <div className='container'>
        <div className="header__grid">
          <SubHeader image={images.spoon} />
          <HeadingImage image={images.welcome} />
        </div>
     </div>
    </div>
  )
}

export default Header