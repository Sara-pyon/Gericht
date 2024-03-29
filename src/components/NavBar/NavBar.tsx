import { useState } from 'react'
import './NavBar.css'
import images from '../../constants/images'
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";


const NavBar = () => {
  const[toggle, setToggle] = useState(false);
  

  return (
    <div className="nav">
      <div className="nav__img">
        <img src={images.gericht} alt="" />
      </div>
      <ul className={`nav__list  ${toggle? 'active' : ''}`}>
        <li className="nav__item"><a href="#Home">Home</a></li>
        <li className="nav__item"><a href="#About">About</a></li>
        <li className="nav__item"><a href="#Menu">Menu</a></li>
        <li className="nav__item"><a href="#Awards">Awards</a></li>
        <li className="nav__item"><a href="#Contact">Contact</a></li>
        <MdOutlineRestaurantMenu className='nav__close' onClick={() => setToggle(false)}/>
      </ul>
      <div className="nav__logBook">
        <a href="#login">Log In / Register</a>
        <div />
        <a href="/">Book Table</a>
      </div>
      <GiHamburgerMenu className='nav__open'
            onClick={() => setToggle(true)}/>
    </div>
  )
}

export default NavBar