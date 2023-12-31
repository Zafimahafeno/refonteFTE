/* eslint-disable react/jsx-no-undef */
import Footer from "../../components/footer/Footer";
import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import { NavLink } from 'react-router-dom';
import Sidebar from '../../components/Sidebar/sidebar';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import ReactPlayer from "react-player";
import { FaPlay } from 'react-icons/fa';
import './ReservationStand.css';
import Stand from './Stand';

// import d'image
import sary1 from '../../img/stand/1 (2).jfif';
import sary2 from '../../img/stand/2.jfif';
import sary3 from '../../img/stand/3.jfif';
import video1 from '../../img/stand/video1.mp4';
import video2 from '../../img/stand/video2.mp4';
import video3 from '../../img/stand/video3.mp4';

const Reservation = () => {
  const [showModal, setShowModal] = useState(false);
  // Références aux instances de Swiper
  const heroSwiperRef = useRef(null);
  const handleReserveClick = () => {
     // Arrêter le Swiper lorsque la fenêtre modale s'affiche
     if (heroSwiperRef.current) {
      heroSwiperRef.current.autoplay.stop();
    }
    setShowModal(true);
  }
  const closeAndPlayHero = () => {
    // Redémarrer le Swiper lorsque la fenêtre modale est fermée
    if (heroSwiperRef.current) {
      heroSwiperRef.current.autoplay.start();
    }
    setShowModal(false);
  };


  const standData = [
    {
      id: 1,
      image: sary1,
      video: video1,
      name: 'Stand Silver'
    },
    {
      id: 2,
      image: sary2,
      video: video2,
      name: 'Stand Gold'
    },
    {
      id: 3,
      image: sary3,
      video: video3,
      name: 'Stand Platinium'
    },
    {
      id: 1,
      image: sary1,
      video: video1,
      name: 'Stand Silver'
    },
    {
      id: 2,
      image: sary2,
      video: video2,
      name: 'Stand Gold'
    },
    {
      id: 3,
      image: sary3,
      video: video3,
      name: 'Stand Platinium'
    }
  ]

  const [isPlaying, setIsPlaying] = useState(null);
  const [showimg, setShowImg] = useState(false);


  const handlebtnPlay = () => {
    if (isPlaying) {
      playHero()
    } else {
      pauseHero()
    }
  }


  const [heroSwiper, setSwiperRef] = useState(null);
  const playHero = () => {
    heroSwiper.autoplay.start();
  };
  const pauseHero = () => {
    heroSwiper.autoplay.stop();
  };

  return (
    <div className='reservation-stand'>

      <div className="stand-illustration">
        <h2> Visiter et réserver votre stand </h2>
        <p>Mettre des descriptions pour illustrer le slide ci apres. vous pouvez mettre ce que vous voulez ,long ou court mais ayez dela bonne inspiration.</p>
      </div>

      <div className="stand-slider">
        <Swiper
          ref={heroSwiper}
          loop
          onSlideChange={() => {
            setIsPlaying(null);
            setShowImg(false);
          }}
          onSwiper={setSwiperRef}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
          watchSlidesProgress={false}
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 150,
            modifier: 2,
            slideShadows: true,
          }}
          modules={[EffectCoverflow, Navigation, Autoplay]}
          className="mySwiper2"
        >
          {standData.map((data) => (
            <SwiperSlide key={data.id} className='swiper-slide2'>
              <div className='bouton' onClick={() => {
                setShowImg(!showimg);
                setIsPlaying(data.id);
                handlebtnPlay();
              }}>
                {showimg ? "" : <FaPlay />}
              </div>

              <div>
                {showimg ? (
                  <ReactPlayer
                    loop
                    key={data.id}
                    url={data.video}
                    controls={false}
                    onPlay={() => { setIsPlaying(data.id); }}
                    playing={isPlaying === data.id}
                    width={'100%'}
                    height={'100%'}
                  />
                ) : (
                  <img
                    src={data.image}
                    width={'100%'}
                    height={'100%'}
                    alt="sary"
                  />
                )}
              </div>

              <div className={`stand-info ${showimg ? 'active' : ''}`}>
                <div className='stand-name'>{data.name}</div>
                <br />
                <button onClick={handleReserveClick}>Réserver</button>
                {/* Affichez la fenêtre modale si showModal est true */}
        {showModal && <Stand onClose={closeAndPlayHero} />}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Footer/>
    </div>
  );
}

export default Reservation;
