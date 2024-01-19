import { images } from '../constants'
import AboutDefinition from './AboutDefinition'
import './About.css'

const About = () => {
    const title1 = 'About Us';
    const title2 = 'Our History';
    const des1 = 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Quis Pharetra Adipiscing Ultrices Vulputate Posuere Tristique. In Sed Odio Nec Aliquet Eu Proin Mauris Et.'
    const des2 = 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Quis Pharetra Adipiscing Ultrices Vulputate Posuere Tristique. In Sed Odio Nec Aliquet Eu Proin Mauris Et.'

  return (
    <div className="about section">
        <div className="about__section container">
            <div className="about-grid">
                <AboutDefinition title={title1} description={des1}
                    image={images.spoon} position='definition-left'
                  />
                <div className="about__knife">
                    <img src={images.knife} alt="image knife"/>
                </div>
                <AboutDefinition title={title2} description={des2}
                    image={images.spoon} position='definition-right'/>
            </div>
            <div className='about-bg'>
                <img src={images.G} alt="G" />
            </div>
        </div>
    </div>
  )
}

export default About