import Showcaseheader from '../Showcaseheader'
import './Laurels.css'
import images from '../../constants/images'
import LaurelsAwards from './LaurelsAwards'
import data from '../../constants/data'

const Laurels = () => {
  return (
    <div className="laurels section" id='Awards'>
        <div className="container laurels__container">
           <div className="laurels__content section-content">
               <Showcaseheader title='Our Laurels' subTitle='Awards & Recognition' />
               <div className="laurels__list">
                {data.awards.map(award => 
                <LaurelsAwards image={award.imgUrl} 
                                title={award.title}
                                description={award.subtitle} 
                                key={award.title}/>
                    )}
               </div>
           </div>
           <div className="laurels__img">
            <img src={images.laurels} alt="" />
           </div>
        </div>
    </div>
  )
}

export default Laurels