import images from '../constants/images'

interface Props{
    title: string
}

const TitleWSpoon = ({title}:Props) => {
  return (
    <div className="title-w-spoon">
        <p className='title-w-spoon__title'>{title}</p>
        <img src={images.spoon} alt="logo spoon" />
    </div>
  )
}

export default TitleWSpoon