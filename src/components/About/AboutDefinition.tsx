interface Props{
    title: string;
    image: string;
    description: string;
    position?: 'definition-left' | 'definition-right';
}

const AboutDefinition = ({title,image,description, position}:Props) => {
  return (
    <div className={`about__definition ${position}`}>
        <div className='about__heading' >
            <h2>{title}</h2>
            <img src={image} alt={image} />
        </div>
        <p className="about__description">
            {description}
        </p>
        <button className="btn-golden">Know More</button>
    </div>
  )
}

export default AboutDefinition