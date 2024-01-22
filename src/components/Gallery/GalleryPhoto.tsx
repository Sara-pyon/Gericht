import { BsInstagram } from "react-icons/bs"

interface Props{
    image: string;
}

const GalleryPhoto = ({image}:Props) => {
  return (
    <div className="gallery__item">
        <img src={image} alt="instagram photo" />
        <div className="gallery__overlay
                        d-flex justify-content-center align-items-center">
            <BsInstagram fontSize={30}
                         className="icon text-white text-opacity-50 cus"
                          />
        </div>
    </div>
  )
}

export default GalleryPhoto