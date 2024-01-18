import {GiHamburgerMenu} from 'react-icons/gi'
import { MdOutlineRestaurantMenu } from "react-icons/md";
import images from '../constants/images'
import styles from './NavBar.module.css'

const NavBar = () => {

  return (
    <nav className={styles.nav}>
        <img src={images.gericht} alt='app logo'/>
        <ul className='nav-items'>
            <li className='nav-item'><a ref='#home'>Home</a></li>
            <li className='nav-item'><a ref='#about'>About</a></li>
            <li className='nav-item'><a ref='#menu'>Menu</a></li>
            <li className='nav-item'><a ref='#awards'>Awards</a></li>
            <li className='nav-item'><a ref='#contact'>Contact</a></li>
        </ul>
    </nav>
  )
}

export default NavBar