import Sidebar from '../../components/Sidebar/sidebar';
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/effect-coverflow';
import ReactPlayer from "react-player";
import { FaPause, FaPlay } from 'react-icons/fa';
import './Reservation.css';

// import d'image
import sary1 from '../../img/stand/1 (2).jfif';
import sary2 from '../../img/stand/2.jfif';
import sary3 from '../../img/stand/3.jfif';
import video1 from '../../img/stand/video1.mp4';
import video2 from '../../img/stand/video2.mp4';
import video3 from '../../img/stand/video3.mp4';

const Reservation = () => {
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
  const [isPlaying, setIsPlaying] = useState(null);
  const [showimg, setShowImg] = useState(false);
  

  const [heroSwiper, setSwiperRef] = useState(null);
  const playHero = () => {
    if (heroSwiper) {
      heroSwiper.autoplay.start();
    }
  };
  
  const pauseHero = () => {
    if (heroSwiper) {
      heroSwiper.autoplay.stop();
    }
  };
  const handlebtnPlay = () => {
      if (isPlaying) {
          playHero()
      } else {
          pauseHero()
      }
  }

  return (
    <div className='reservation-stand'>
      <Sidebar />
      <div className="stand-slider">
        <Swiper
          ref={heroSwiper}
          
          loop
          onSlideChange={() => { 
            setIsPlaying(null);
            setShowImg(false);
          }}
          onSwiper={ setSwiperRef }
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
          watchSlidesProgress={false}
          navigation= {{
            nextEl: '.next',
            prevEl: '.prev',}
          }
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 0,
            stretch:0,
            depth: 150,
            modifier: 2,
            slideShadows: true,
          }}
        
          modules={[EffectCoverflow,Navigation,Autoplay]}
          className="mySwiper"
        >
          {standData.map((data,index) => (
            <SwiperSlide key={data.id} >
                  <div className='bouton' onClick={() => {
                    setShowImg(!showimg);
                    setIsPlaying(data.id);
                    handlebtnPlay();
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
                <div>
                  <button>Reserver</button>
                </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      
      
    </div>
  );
}

export default Reservation;