import TitleWSpoon from '../TitleWSpoon'
import './Footer.css'

const Subscribe = () => {
  return (
    <div className="subscribe">
        <TitleWSpoon title='Newsletter' />
        <h2 className="section-heading">Subscribe To Our newsletter</h2>
        <p>Add Never Miss Latest Updates!</p>
        <form >
            <div className="subscribe__input-group">
                <input type="text" placeholder='Enter your e-mail address' 
                        className='subscribe__input'/>
                <button className="btn-golden">Subscribe</button>
            </div>
        </form>
    </div>
  )
}

export default Subscribe