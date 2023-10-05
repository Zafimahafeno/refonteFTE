import Sidebar from '../../components/Sidebar/sidebar';
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
<<<<<<< HEAD
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import ReactPlayer from "react-player";
import { FaPause, FaPlay } from 'react-icons/fa';
// import Autocomplete from '../../components/drowpDown/Autocomplete';
import PlaceView from './PlaceView';
import { useEffect } from 'react';

const videos = [
  {
    id: 1,
    nom:'Neymar',
    desc:'Roi du foot-ball',
    url: "https://www.youtube.com/watch?v=0wVUFtBTBxY",
    img: "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt5d6c5834006921b6/64c7a54446309eb49d63dbba/Neymar.jpg?auto=webp&format=pjpg&width=640&quality=60"
  },
  {
    id: 2,
    nom:'Jordan',
    desc:'Roi du basket-ball',
    url: "https://www.youtube.com/watch?v=3e95hY7boog",
    img: "https://www.lavieeco.com/wp-content/uploads/2023/04/Jordan-1536x1536.jpg"
  },
  {
    id: 3,
    nom:'Novak Djokovic',
    desc:'Roi du music',
    url: "https://www.youtube.com/watch?v=_awxdvmm_ok",
    img: "https://www.tennisworldfr.com/imge/24969/novak-djokovic-bat-tous-les-records-il-est-destine-a-eclipser-tous-les-autres.webp"
  }
];

export default function Reservation() {
  const [isPlaying, setIsPlaying] = useState(null);
  const [showimg, setShowImg] = useState(false)

  const [heroSwiper, setSwiperRef] = useState(null);
  const playHero = () => {
    heroSwiper.autoplay.start();
  };
  const pauseHero = () => {
    heroSwiper.autoplay.stop();
  };
  
=======
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
>>>>>>> e45f4ef13f9dc236df580be24f14abc728c6fba8
  const handlebtnPlay = () => {
      if (isPlaying) {
          playHero()
      } else {
          pauseHero()
      }
  }
<<<<<<< HEAD

  // const options = ['ReactJs', 'VueJs', 'NodeJs']
  // const [itemSelected, setItemSelected] = useState('Choisir un framwork')

   const [places, setPlaces] = useState([])
    
    useEffect(() => {
        const setplace = ()=>{
            const place = []
            for (let index = 1; index <= 216; index++) {
                const element = index;
                place.push({id:element, status:'disponible'})
            }
            setPlaces(place);
        }
        return setplace();
    }, [])
  
   const setItem=(value)=>{
        const test = selected.filter(id => id.id===value.id)
        if (test.length > 0) {
            places.splice(0, 1, { id: test[0].id, status: "disponible" });
            selected.splice(selected.indexOf(test[0].id), 1);
            console.log(selected);
        } else {
            places.splice(places.indexOf(value), 1, { id: value.id, status: "select" });
          selected.push({ id: value.id });
          console.log(selected);
        }
  }
  
    const selected = [];

  return (
    <div>
      <Sidebar />
      <Swiper
        ref={heroSwiper}
        modules={[Pagination, Navigation, Autoplay]}
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
        style={{
          width: 250,
          marginTop: 20,
          position: 'relative',
          borderRadius: 10,
          background:'#000000b7',
        }}
      >
        {videos.map((data) => (
          <SwiperSlide key={data.id} style={{
            display: 'flex',
            flexDirection: 'column',
          }}>
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
          </SwiperSlide>
        ))}
      </Swiper>


      <div style={{
        width: 1000,
        minHeight: 400,
        background: 'red',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
          gap: 5,
        flexWrap:'wrap'
      }}>
        {places.map(item => (
          <div key={item.id}  onClick={(() => {
              setItem(item)
            })} >
            <PlaceView/>
          </div>
        ))}
      </div>
      
    </div>
  );
}
=======

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
>>>>>>> e45f4ef13f9dc236df580be24f14abc728c6fba8
