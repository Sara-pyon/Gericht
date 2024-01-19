interface Props{
  image: string;
}

const SubHeader = ({image}:Props) => {
  return (
    <div className='subheader'>
        <div className="header__subtitle">
            <p className='header__subtitle'>Chase The New Flavour</p>
            <img src={image} alt="loo spoon" />
        </div>
        <h1 className='header__title'>the key to fine <br/> dining</h1>
        <p className="header__description">
        Sit Tellus Lobortis Sed Senectus Vivamus Molestie. Condimentum Volutpat Morbi Facilisis Quam Scelerisque Sapien. Et, Penatibus Aliquam Amet Tellus
        </p>
        <button className="btn-golden">
            Explore Menu
        </button>
    </div>
  )
}

export default SubHeader