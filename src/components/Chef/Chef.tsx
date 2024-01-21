import TitleWSpoon from '../TitleWSpoon'
import images from '../../constants/images'
import './Chef.css'

const Chef = () => {
  return (
    <div className="chef section" id='chef'>
        <div className="container">
            <div className="chef__content">
                <div >
                    <img src={images.chef} alt="chef photo" className="chef__img" />
                </div>
                <div className="chef__body">
                    <div className="chef__heading">
                        <TitleWSpoon title='Chef’s Word' />
                        <h2 className="section-heading">What We Believe In</h2>
                    </div>
                    <div className="chef__quote">
                        <div className="chef__text">
                            <div className='chef__text-quote'>
                                <img src={images.quote} alt='Chef message'/>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                            <p>Dignissimos, perspiciatis suscipit. Eius numquam nam repellendus dolores natus assumenda deleniti aspernatur, similique porro voluptates odio nemo consequatur perspiciatis animi delectus? Expedita.</p>
                        </div>
                        <div className="chef__sign">
                            <p className="chef__restaurant">Kevin Luo</p>
                            <p className="chef__title">Chef & Founder</p>
                            <img src={images.sign} alt="chef sign" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Chef