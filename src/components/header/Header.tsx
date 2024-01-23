import images from '../../constants/images'
import HeadingImage from './HeadingImage'
import './Header.css'
import SubHeader from './SubHeader'

const Header = ({}) => {
  return (
    <div className="header section" id='Home'>
     <div className='container'>
        <div className="header__grid">
          <SubHeader />
          <HeadingImage image={images.welcome} />
        </div>
     </div>
    </div>
  )
}

export default Header