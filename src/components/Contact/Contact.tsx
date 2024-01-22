import Showcaseheader from '../Showcaseheader'
import './Contact.css'
import { images } from '../../constants'

const Contact = () => {
  return (
    <div className="contact section">
        <div className="contact__container container">
            <div className="contact__content section-content">
                <Showcaseheader title='Find Us' subTitle='Contact' />
                <div className="contact__detail">
                    <p>Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG</p>
                    <h3>Opening Hours</h3>
                    <div className="contact__hours">
                        <p>Mon - Fri : 10:00 AM - 02:00 AM</p>
                        <p>Sat - Sun : 10:00 AM - 03:00 AM</p>
                    </div>
                    <button className="btn-golden">Visit Us</button>
                </div>
            </div>
            <div className="contact__img">
                <img src={images.findus} alt="FindUs image" />
            </div>
        </div>
    </div>
  )
}

export default Contact