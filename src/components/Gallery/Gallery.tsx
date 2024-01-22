import Showcaseheader from '../Showcaseheader'
import images from '../../constants/images'
import GalleryPhoto from './GalleryPhoto'
import { BsArrowRightShort ,BsArrowLeftShort  } from 'react-icons/bs'
import './Gallery.css'
import { useRef } from 'react'

const galleryImages= [images.gallery01, images.gallery02, images.gallery03, images.gallery04];

const Gallery = () => {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (derection:string) => {
        const current = scrollRef.current;

        if(derection === 'left') return current? current.scrollLeft -= 300 : null;
        if(derection === 'right') return current? current.scrollLeft += 300 : null;
    }

  return (
    <div className="gallery section">
        <div className="container gallery__container">
            <div className="gallery__content section-content">
                <Showcaseheader title='Photo Gallery' subTitle='Instagram' />
                <p className="gallery__description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil alias magnam odit necessitatibus, excepturi eveniet eius maxime ratione harum tenetur.
                </p>
                <button className="btn-golden">
                    View More
                </button>
            </div>
            <div className="gallery__images">
                <div className="gallery__images-container" ref={scrollRef}>
                    {galleryImages.map(image =>
                        <GalleryPhoto image={image} key={image} />)}
                </div>
                <div className="gallery__arrows">
                    <BsArrowLeftShort fontSize={25}  color='white' 
                        className='gallery__arrow-left gallery__arrow'
                        onClick={() => scroll('left')}
                        />
                    <BsArrowRightShort fontSize={25}  color='white' 
                        className='gallery__arrow-right gallery__arrow'
                        onClick={() => scroll('right')}/>  
                </div>
            </div>
        </div>
    </div>
  )
}

export default Gallery