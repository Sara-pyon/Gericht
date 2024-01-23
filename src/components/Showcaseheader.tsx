import TitleWSpoon from './TitleWSpoon'

interface Props{
    subTitle: string;
    title: string;
}

const Showcaseheader = ({subTitle, title}: Props) => {
  return (
    <div className="showcase__header">
        <TitleWSpoon title={subTitle} />
        <h2 className="section-heading">{title}</h2>
    </div>
  )
}

export default Showcaseheader