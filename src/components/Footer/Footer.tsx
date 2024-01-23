import './Footer.css'
import Subscribe from './Subscribe'
import { images } from '../../constants'
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="footer section">
        <div className="container footer__container">
            <div className="footer__subscribe">
                <Subscribe />
            </div>
            <div className="footer__group">
                <div className="footer__contact">
                    <h3 className="footer__group-heading">Contact Us</h3>
                    <div>
                        <p>9 W 53rd St, New York, NY 10019, USA</p>
                        <p>+1 212-344-1230</p>
                        <p>+1 212-555-1230</p>
                    </div>
                </div>
                <div className="footer__logo">
                    <img src={images.gericht} alt="logo" className='footer__logo-name'/>
                    <p>"The Best Way To Find Yourself Is To Lose Yourself In The Service Of Others"</p>
                    <img src={images.spoon} alt="spoon" />
                    <div className="footer__social">
                        <FiFacebook color='white' cursor='pointer' fontSize={20} />
                        <FiTwitter color='white' cursor='pointer' fontSize={20}/>
                        <FiInstagram color='white' cursor='pointer' fontSize={20}/>
                    </div>
                </div>
                <div className="footer__hours">
                    <h3 className="footer__group-heading">Working Hours</h3>
                    <div>
                        <p>Monday-Friday:</p>
                        <p>08:00 AM - 12:00 AM</p>
                    </div>
                    <div>
                        <p>Saturday-Sunday:</p>
                        <p>07:00 AM - 11:00 PM</p>
                    </div>
                </div>
            </div>
            <div className="footer__copy">
                <p>2021 Gericht. All Rights Reserved.</p>
            </div>
        </div>
    </div>
  )
}

export default Footer