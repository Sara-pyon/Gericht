import React from 'react'
import images from '../constants/images'
import Container from './Container'
import SubHeading from './SubHeader'
import HeadingImage from './HeadingImage'
import './Header.css'
import SubHeader from './SubHeader'



const Header = () => {
  return (
    <div className="header">
     <Container>
        <SubHeader />
        <HeadingImage />
     </Container>
    </div>
  )
}

export default Header