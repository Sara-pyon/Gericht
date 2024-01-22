import images from '../../constants/images'

const LaurelsAwards = () => {
  return (
    <div className="laurels__item">
        <img src={images.award02} alt='awards' />
        <div className="laurels__label">
            <p className="laurels__title">Big champion</p>
            <p className="laurels__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, ducimus.</p>
        </div>
    </div>
  )
}

export default LaurelsAwards