import { useRef } from 'react'
import TitleWSpoon from '../TitleWSpoon'
import './Footer.css'

interface Props{
  subscribe : (email : string) => void
}

const Subscribe = ({subscribe}:Props) => {
  const Ref = useRef<HTMLInputElement>(null);

  return (
    <div className="subscribe">
        <TitleWSpoon title='Newsletter' />
        <h2 className="section-heading">Subscribe To Our newsletter</h2>
        <p>Add Never Miss Latest Updates!</p>
        <form onSubmit={(event) =>{
          event.preventDefault();
    
          if(Ref.current){
            subscribe(Ref.current.value);
            Ref.current.value = '';
          }
        }}>
            <div className="subscribe__input-group">
                <input type="text" placeholder='Enter your e-mail address' 
                        className='subscribe__input'
                        ref={Ref}/>
                <button className="btn-golden"
                  type='submit' value='submit'>Subscribe</button>
            </div>
        </form>
    </div>
  )
}

export default Subscribe