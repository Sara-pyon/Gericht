import './Intro.css'
import {meal} from '../../constants'
import { BsFillPlayFill,BsFillPauseFill } from "react-icons/bs";
import { useRef, useState } from 'react';

const Intro = () => {
  const [playvideo, setPlayVideo] = useState(false);
  const vidRef = useRef<HTMLVideoElement>(null);

  const handleVideo = () => {
    setPlayVideo(!playvideo);
    if(playvideo) vidRef.current?.pause();
    else vidRef.current?.play();
  }

  return (
    <div className="intro section">
        <div className="intro__container container">
            <video src={meal}
            ref={vidRef}
             typeof='video/mp4'
             loop
             controls={false}
             ></video>
        <div className="intro__overlay d-flex justify-content-center align-items-center">
          <div className="intro__videoControl d-flex justify-content-center align-items-center">
            { playvideo ? <BsFillPauseFill fontSize={30} onClick={handleVideo} /> :
            <BsFillPlayFill fontSize={30} onClick={handleVideo} />}
          </div>
        </div>
        </div>
    </div>
  )
}

export default Intro