import TitleWSpoon from '../TitleWSpoon'
import Menu from './Menu'
import './SpecialMenu.css'
import images from '../../constants/images'
import items from '../../constants/data'




const SpecialMenu = () => {

  return (
    <div className="specialMenu section" id='specialMenu'>
        <div className="container">
            <header className="specialMenu__header">
                <TitleWSpoon title='Menu That Fits You Palatte'/>
                <h2 className='section-heading'>Today's Special</h2>
            </header>
            <div className="specialMenu__body">
                <div className='specialMenu__menu'>
                  <Menu title='Wine & Beer' items={items.wines}/>
                </div>
                <img className='specialMenu__img' src={images.menu} />
                <div className='specialMenu__menu'>
                  <Menu title='Cocktails' items={items.cocktails} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default SpecialMenu