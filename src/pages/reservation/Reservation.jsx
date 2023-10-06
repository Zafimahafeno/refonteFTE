import React, { useState } from "react";
import Slider from 'react-slick';
import ReactPlayer from "react-player";
import { FaPause, FaPlay , FaArrowRight, FaArrowLeft} from 'react-icons/fa';
import Sidebar from '../../components/Sidebar/sidebar';
import './Reservation.css';
import NavBar from '../../components/navBar/NavBar';

// import d'image
import sary1 from '../../img/stand/1 (2).jfif';
import sary2 from '../../img/stand/2.jfif';
import sary3 from '../../img/stand/3.jfif';
import video1 from '../../img/stand/video1.mp4';
import video2 from '../../img/stand/video2.mp4';
import video3 from '../../img/stand/video3.mp4';

const Reservation = () =>{
  const NextArrow = ({ onClick})  => {
    return(
      <div className="arrow next" onClick={onClick}>
         <FaArrowRight/>
      </div>
    )
  }
  const PrevArrow = ({ onClick})  => {
    return(
      <div className="arrow prev" onClick={onClick}>
         <FaArrowLeft/>
      </div>
    )
  }
  const standData = [
    {
      id:1,
      image:sary1,
      video:video1,
      name:'Stand Silver'
    },
    {
      id:2,
      image:sary2,
      video:video2,
      name:'Stand Gold'
    },
    {
      id:3,
      image:sary3,
      video:video3,
      name:'Stand Platinium'
    },
    {
      id:1,
      image:sary1,
      video:video1,
      name:'Stand Silver'
    },
    {
      id:2,
      image:sary2,
      video:video2,
      name:'Stand Gold'
    },
    {
      id:3,
      image:sary3,
      video:video3,
      name:'Stand Platinium'
    }
  ]
  const settings = {
    infinite: true,
    lazyload: true,
    speed:300,
    slidesToShow:3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>,
    autoplay: true, 
    autoplaySpeed: 3000,
    beforeChange:(current,next) => setImageIndex(next)
  }

  
  const [isPlaying, setIsPlaying] = useState(null);
  const [showimg, setShowImg] = useState(false);
  const [imageIndex,setImageIndex] = useState(0);
  
  return (
    <div className='reservation-stand'>
      <Sidebar/>
      <div className="stand-slider">
        <Slider {... settings}>
          {standData.map((data,index) => (
            <div key={data.id} className={index=== imageIndex ? "slide activeSlide" : "slide"}>
              
                <div onClick={() => {
                  setShowImg(!showimg);
                  setIsPlaying(data.id);
                }}>
                  {showimg ? <FaPause size={20} /> : <FaPlay size={20} />}
                </div>
              
              <div>
                {showimg ? <ReactPlayer
                  loop
                  key={data.id}
                  url={data.video}
                  controls={false}
                  onPlay={() => { setIsPlaying(data.id); }}
                  playing={isPlaying === data.id}
                  width={'100%'}
                  height={'100%'}
                /> :
                  <img
                    src={data.image}
                    width={'100%'}
                    height={'100%'}
                    alt="sary"
                  />
                }
              </div>
              <div>{data.name}</div>
                
               
              
            </div>
          ))}
        </Slider>
      
      </div>

<div style={{
  width: 45,
  height: 45,
  borderRadius: '50%',
  background: 'red',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  top: '60%',
  zIndex: 2,
  cursor:'pointer',
}} onClick={() => {
  setShowImg(!showimg);
  setIsPlaying(data.id);
  handlebtnPlay();
}}>
  { showimg ? <FaPause size={20} /> : <FaPlay size={20} /> }
</div>
<div style={{
  width: '100%',
  height: 250,
  background:'grey',
}}>
  {showimg ? <ReactPlayer
      loop
      key={data.id}
      url={data.url}
      controls={false}
      onPlay={() => { setIsPlaying(data.id); }}
      playing={isPlaying === data.id}
      width={'100%'}
      height={'100%'}
    /> :
    <img
      src={data.img}
      width={'100%'}
      height={'100%'}
      alt="sary"
      style={{
        objectFit: 'cover',
        transformStyle:'preserve-3d'
      }}
    />
  }
</div>
<div style={{
  width: '100%',
  minHeight: 100,
  display: 'flex',
  justifyContent:'center',
  alignItems:'center',
}}>
  <div style={{
    width: '90%',
    height: '80%',
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    marginBottom:20,
  }}>
    <div>
      <div style={{
        fontSize:18,
      }}>Nom: </div>
      <div style={{
        fontSize:15,
        fontWeight:200,
      }}>{data.nom}</div>
    </div>
    <div>
      <div style={{
        fontSize:18,
      }}>Description: </div>
      <div style={{
        fontSize:15,
        fontWeight:200,
      }}>{data.desc}</div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Reservation;
