
interface Props{
  image: string;
}

const HeadingImage = ({image}:Props) => {
  return (
    <div className="header__img-container">
      <img src={image} alt="image food" />
    </div>
  )
}

export default HeadingImage