interface Props{
  image: string;
  title: string;
  description: string;
}

const LaurelsAwards = ({image, title, description}: Props) => {
  return (
    <div className="laurels__item">
        <img src={image} alt='awards' />
        <div className="laurels__label">
            <p className="laurels__title">{title}</p>
            <p className="laurels__description">{description}</p>
        </div>
    </div>
  )
}

export default LaurelsAwards