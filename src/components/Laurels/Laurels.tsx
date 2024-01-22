import Showcaseheader from '../Showcaseheader'
import './Laurels.css'
import images from '../../constants/images'
import LaurelsAwards from './LaurelsAwards'

const Laurels = () => {
  return (
    <div className="laurels section">
        <div className="container">
           <Showcaseheader title='Our Laurels' subTitle='Awards & Recognition' /> 
           <LaurelsAwards />
        </div>
    </div>
  )
}

export default Laurels