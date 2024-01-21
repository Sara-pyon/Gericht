import { Item } from "../../constants/data"

interface Props{
    items: Item[];
    title: string;
}

const Menu = ({items, title}:Props) => {
  return (
    <>
    <header className='menu__heading'>{title}</header>
    <ul className="menu__list">
        {items.map(item => 
        <li className="menu__item" key={item.title}>
            <div className="menu__item-label">
                <div className="menu__item-heading">
                    <h3 className="menu__item-name">{item.title}</h3>
                    <div className="menu__item-price">
                        <div className="menu__price-line"></div>
                        <p>{item.price}</p>
                    </div>
                </div>
                <p className="menu__tags">{item.tags}</p>
            </div>
        </li>
        )}
    </ul>
    </>
    
  )
}

export default Menu